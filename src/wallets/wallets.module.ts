import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { WalletSubscriber } from './wallets.subscriber';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, UsersService, WalletSubscriber],
  imports: [TypeOrmModule.forFeature([Wallet, User]), TransactionsModule],
  exports: [TypeOrmModule],
})
export class WalletsModule {}
