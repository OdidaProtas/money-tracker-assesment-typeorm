import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Wallet } from './entities/wallet.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet) private walletRepository: Repository<Wallet>,
    private userService: UsersService,
  ) {}

  async create(createWalletDto: CreateWalletDto) {
    const user = await this.userService.findOne(createWalletDto.userId);
    const wallet = this.walletRepository.create({ ...createWalletDto });
    wallet.user = user;
    const withUserSaved = await this.walletRepository.save(wallet);
    const withUserSavedCopy = { ...withUserSaved, userId: user.id };
    delete withUserSavedCopy['user'];
    return withUserSavedCopy;
  }

  findAll() {
    return `This action returns all wallets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wallet`;
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
