import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'A unique username',
  })
  username: string;

  @ApiProperty({
    example: 'John',
  })
  firstName: string;

  @ApiProperty({
    example: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    required: false,
    default: 0.0,
  })
  balance: number;
}
