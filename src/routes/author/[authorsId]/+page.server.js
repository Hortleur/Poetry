import {error, fail} from "@sveltejs/kit";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
    runtime: 'edge',
};

export async function load({params}) {
    return {
        author: await prisma.user.findFirst({
            include: {
                poems:{
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
                }
            },
            where:{
                id: params.authorId
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