import { PrismaClient, User } from "@prisma/client";

class UsersController {
    async save(user: User) {
        const prisma = new PrismaClient();
        try {

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