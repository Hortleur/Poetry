import {prisma} from "$lib/server/prisma.js";

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