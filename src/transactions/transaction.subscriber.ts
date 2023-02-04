import { UsersService } from 'src/users/users.service';
import { WalletsService } from 'src/wallets/wallets.service';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@EventSubscriber()
export class TransactionSubscriber
  implements EntitySubscriberInterface<Transaction>
{
  constructor(
    dataSource: DataSource,
    private walletService: WalletsService,
    private userService: UsersService,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Transaction;
  }

  async afterInsert(event: InsertEvent<Transaction>) {
    let { wallet, type, amount } = event.entity;
    // Update wallet balance
    let wallerBalance = wallet.balance;
    if (type === 'credit') wallerBalance = wallerBalance + amount;
    else wallerBalance = wallerBalance - amount;
    this.walletService.update(wallet.id, { balance: wallerBalance });
    // update user balance
    let user = await this.userService.findOneByWallet(wallet.id);
    let userBalance = user.balance;
    if (type === 'credit') userBalance = userBalance + amount;
    else userBalance = userBalance - amount;
    this.userService.update(user.id, { balance: userBalance });
  }
}
