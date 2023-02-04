import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { WalletsService } from 'src/wallets/wallets.service';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}
  create(createTransactionDto: CreateTransactionDto) {
    return 'This action adds a new transaction';
  }

  findAll() {
    return `This action returns all transactions`;
  }

  async findAllByWallet(walletId: string) {
    // const wallet = await this./walletService.findOne(walletId);
    // return this.transactionsRepository.find({ where: { wallet } });
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
