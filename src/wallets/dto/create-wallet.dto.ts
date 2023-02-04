import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
  @ApiProperty({
    default: '',
    required: true,
  })
  userId: string;

  @ApiProperty({
example: 'wallet_1',
  })
  name: string;
}
