import { UsersService } from 'src/users/users.service';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Wallet } from './entities/wallet.entity';

@EventSubscriber()
export class WalletSubscriber implements EntitySubscriberInterface<Wallet> {
  constructor(dataSource: DataSource, private userService: UsersService) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Wallet;
  }

  async afterInsert(event: InsertEvent<Wallet>) {
    let { user, balance } = event.entity;
    let userBalance = user.balance + balance;
    if (userBalance > user.balance)
      this.userService.update(user.id, { balance: userBalance });
  }
}
