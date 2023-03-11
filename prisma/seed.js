import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const Sonnet = await prisma.poem.create({
        data:{
            title: 'Les Yeux Bleus',
            content:'Tes yeux couleur de l\'océan profond,\n' +
                'Captivent mon âme d\'un regard intense,\n' +
                'Leur éclat étincelle telle une étoile,\n' +
                'Et me laisse sans voix, sans défense.\n' +
                '\n' +
                'Ton sourire éclaire mon univers,\n' +
                'Et fait briller les étoiles de mille feux,\n' +
                'Je suis comme envoûté par ta lumière,\n' +
                'Et je me noie dans tes yeux bleus.\n' +
                '\n' +
                'Tes cheveux, si doux au toucher,\n' +
                'Sont comme une brise d\'été,\n' +
                'Je suis happé par leur parfum enivrant,\n' +
                'Et je ne peux que me laisser porter.\n' +
                '\n' +
                'Tu es mon soleil, ma lune et mes étoiles,\n' +
                'Et ton amour est tout ce dont j\'ai besoin pour vivre.',
            user:{
                create:{
                    pseudo: 'Pitchoune',
                    email: 'pitchoune@test.com'
                }
            },
            picture: "none",
            style:{
                create: {
                    name: 'Sonnet'
                }
            }
        }
    })
    console.log({Sonnet})
}

main()
.then(async ()=>{
    await prisma.$disconnect()
})
.catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})