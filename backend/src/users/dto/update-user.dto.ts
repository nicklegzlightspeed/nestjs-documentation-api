import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the user.',
  })
  id: number;

  @ApiProperty({
    example: 'Jane Doe',
    description: 'The full name of the user.',
  })
  name: string;

  @ApiProperty({
    example: 'jane.doe@example.com',
    description: "The user's email address.",
  })
  email: string;

  @ApiProperty({
    example: 'admin',
    enum: ['admin', 'user'],
    description: 'The role of the user.',
  })
  role: 'admin' | 'user';
}
