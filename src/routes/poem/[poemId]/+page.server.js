import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
    runtime: 'edge',
};
export async function load({params}) {
    return {
        poems: await prisma.poem.findFirst({
            include: {
                style: {
                    select:{
                        name: true
                    }
                },
                user: {
                    select:{
                        pseudo: true
                    }
                }
            },
            where: {
                id: params.poemId
            }
        })
    }
}