import {prisma} from "$lib/server/prisma.js";
import {error, fail} from "@sveltejs/kit";

export const config = {
    runtime: 'edge',
};

export async function load() {
    return {
        styles: await prisma.style.findMany({
            include: {
                poem: {
                    select:{
                        id:true,
                        title: true,
                        user:{
                            select:{
                                id:true,
                                pseudo:true
                            }
                        }
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