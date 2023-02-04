import { UsersService } from 'src/users/users.service';
import { WalletsService } from 'src/wallets/wallets.service';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './transactions.service';

@EventSubscriber()
export class TransactionSubscriber
  implements EntitySubscriberInterface<Transaction>
{
  constructor(dataSource: DataSource, private walletService: WalletsService) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Transaction;
  }

  async afterInsert(event: InsertEvent<Transaction>) {
    let { wallet, type, amount } = event.entity;
    let balance = wallet.balance;
    if (type === 'credit') balance = balance + amount;
    else balance = balance - amount;
    this.walletService.update(wallet.id, { balance });
  }
}
