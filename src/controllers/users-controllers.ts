import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";

class UsersController {
    async save(user: User) {
        const prisma = new PrismaClient();
        
        try {
            const hash = bcrypt.hashSync(
                user.password,
                Number(process.env.BCRYPT_SALT_ROUNDS || 10)
                
            );
            user.password = hash;
            return await prisma.user.create({
                data: user,
            });
            
        } catch (e) {

            throw e;

        } finally {

            await prisma.$disconnect();

        }
    }
}

export default new UsersController();