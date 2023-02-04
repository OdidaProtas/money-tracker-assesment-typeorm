import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({ default: '', required: true })
  walletId: string;

  @ApiProperty({
    default: 'credit',
    description: "Can be of type 'debit' or 'credit'",
  })
  type: string;

  @ApiProperty({
    required: false,
  })
  description?: string;

  @ApiProperty()
  amount: number;
}
