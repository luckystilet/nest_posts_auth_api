import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: 'example.gmail.com', description: 'New email' })
  readonly email: string

  @ApiProperty({ example: '1234', description: 'Created password' })
  readonly password: string
}
