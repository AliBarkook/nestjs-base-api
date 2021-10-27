import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { UserDTO } from "../DTO`s/user.DTO";

@Injectable()

export class UserService {


    async getAllUser(): Promise<UserDTO[]> {
        const file = await readFile('src/asset/userDB.json')
        const rawFile =  file.toString();
        const users = JSON.parse(rawFile);

        return users
    }

    async getUserById(userId: string): Promise<UserDTO> {
        const file = await readFile('src/asset/userDB.json')
        const rawFile =  file.toString();
        const users = JSON.parse(rawFile);

        return users.find(user => user.id == userId);
    }

    async removeUserById(userId: string): Promise<string> {
        const file = await readFile('src/asset/userDB.json')
        const rawFile =  file.toString();
        let users = JSON.parse(rawFile);
        const selectedUser = users.find(user => user.id == userId);

        if (selectedUser) {
            users = users.filter(user => user.id != userId);
            const usersJson = JSON.stringify(users)
            await writeFile('src/asset/userDB.json', usersJson)
            return 'specefic user removed successfuly';
        }
        else
            return '';
    }
}