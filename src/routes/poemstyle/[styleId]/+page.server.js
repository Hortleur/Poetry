import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
    runtime: 'edge',
};
export async function load({params}) {
    return {
        poemStyles: await prisma.style.findFirst({
            include: {
                poem: {
                    include :{
                        user:{
                            select:{
                                pseudo: true
                            }
                        },
                        style:{
                            select:{
                                name: true
                            }
                        }
                    }
                }
            },
            where: {
                id: params.styleId
            }
        })
    }
}