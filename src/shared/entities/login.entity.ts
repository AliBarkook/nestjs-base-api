import { ApiProperty } from '@nestjs/swagger';

export class Login {
  /**
   * The name of the Cat
   * @example Kitty
   */
  username: string;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  password: string;
}
