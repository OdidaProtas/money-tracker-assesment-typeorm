import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
  @ApiProperty({
    default: '',
    required: true,
  })
  userId: string;

  @ApiProperty({
    default: 0.0,
    required: false,
  })
  balance: number;

  @ApiProperty({
    example: 'wallet_1',
  })
  name: string;
}
