import {prisma} from "$lib/server/prisma.js";

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