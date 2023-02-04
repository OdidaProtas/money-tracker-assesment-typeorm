import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'trackerstore.db',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // logging: true,
    }),
    UsersModule,
    WalletsModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
