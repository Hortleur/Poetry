import {error, fail} from "@sveltejs/kit";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
    runtime: 'edge',
};

export async function load() {
    return {
        poems: await prisma.poem.findMany({
            include: {
                style: {
                    select:{
                        id:true,
                        name: true
                    }
                },
                user: {
                    select:{
                        id:true,
                        pseudo: true
                    }
                }
            }
        })
    }
}

export const actions = {
    createPoem : async ({ request }) => {
        const { title, content, image, styleId , userId } = Object.fromEntries(await request.formData())

        try {
            await prisma.Poem.create({
                data: {
                    title,
                    content,
                    image,
                    styleId,
                    userId
                }
            })
        } catch (err){
            console.error(err)
            return fail(500, {message: 'Could not create a poem'})
        }

        return {
            status: 201
        }
    },

}