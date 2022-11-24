import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'example.gmail.com', description: 'New email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string

  @ApiProperty({ example: '1234', description: 'Created password' })
  @IsString({ message: 'Should be a string' })
  @Length(4, 16, { message: 'At least 4 and not more then 16 letters' })
  readonly password: string
}
