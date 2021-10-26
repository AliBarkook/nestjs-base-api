import { Injectable } from "@nestjs/common";
import { readFile } from "fs/promises";
import { UserDTO } from "../DTO`s/user.DTO";

@Injectable()

export class UserService {


    async getAllUser(): Promise<UserDTO[]> {
        const file = await readFile('src/asset/userDB.json')
        const rawFile =  file.toString();
        const users = JSON.parse(rawFile);

        return users
    }
}