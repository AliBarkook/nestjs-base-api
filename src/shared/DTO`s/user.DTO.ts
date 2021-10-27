import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class UserDTO {
    @ApiProperty({ description: 'string' })
    @IsString()
    readonly username: string;

    @ApiProperty({ description: 'string' })
    @IsString()
    readonly phoneNumber: string;

    @ApiProperty({ description: '0' })
    @IsInt()
    readonly age: number;

    @ApiProperty({ description: 'string' })
    @IsString()
    readonly email: string;

    @ApiProperty({ description: 'string' })
    @IsString()
    readonly id: string;

}