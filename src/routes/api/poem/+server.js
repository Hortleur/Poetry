import {prisma} from "$lib/server/prisma.js";

export const GET = async ({request}) => {

    const res = await prisma.poem.findMany({
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