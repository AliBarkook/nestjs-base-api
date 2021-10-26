import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginDTO {
    @ApiProperty({ description: 'string' })
    @IsString()
    readonly username: string;

    @ApiProperty({ description: 'string' })
    @IsString()
    readonly password: string;

}
