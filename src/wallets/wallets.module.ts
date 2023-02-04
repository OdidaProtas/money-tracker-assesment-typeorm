import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, UsersService],
  imports: [TypeOrmModule.forFeature([Wallet, User])],
  exports: [TypeOrmModule],
})
export class WalletsModule {}
