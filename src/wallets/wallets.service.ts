import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

    if (!user) {
      throw new BadRequestException('Invalid user');
    }

    const wallet = this.walletRepository.create({ ...createWalletDto });
    wallet.user = user;
    const withUserSaved = await this.walletRepository.save(wallet);
    const withUserSavedCopy = { ...withUserSaved, userId: user.id };
    delete withUserSavedCopy['user'];
    return withUserSavedCopy;
  }

  findAll() {
    return this.walletRepository.find();
  }

  async findOne(id: string) {
    const wallet = await this.walletRepository.findOne({
      where: { id },
      relations: ['transactions'],
    });

    return wallet;
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    return this.walletRepository.update(id, updateWalletDto);
  }
}
