import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The full name of the user.',
    example: 'Jane Doe',
  })
  name: string;

  @ApiProperty({
    description: "The user's email address.",
    example: 'jane.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The role of the user.',
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: 'admin' | 'user';
}
