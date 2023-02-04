import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { WalletsService } from 'src/wallets/wallets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Wallet } from 'src/wallets/entities/wallet.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { TransactionSubscriber } from './transaction.subscriber';

@Module({
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    WalletsService,
    UsersService,
    TransactionSubscriber,
  ],
  imports: [TypeOrmModule.forFeature([Transaction, Wallet, User])],
  exports: [TypeOrmModule],
})
export class TransactionsModule {}
