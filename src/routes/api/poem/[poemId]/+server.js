import {prisma} from "$lib/server/prisma.js";

export const config = {
    runtime: 'edge',
};

export const GET = async ({params}) => {
    const res = await prisma.poem.findFirst({
        where:{
            id: params.id
        },
        include:{
            style:{
                select:{
                    name:true
                }
            },
            user:{
                select:{
                    pseudo:true
                }
            }
        }
    })

    return new Response(JSON.stringify(res), {status: 200})
}