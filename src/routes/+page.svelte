<script>
    import {slide, fade} from "svelte/transition";
</script>

<main class="grid place-items-center h-screen " in:fade out:fade>
    <div class="flex flex-col items-center justify-center" >
        <div>
            <h1 class=" text-9xl mb-7 font-cursive font-bold" >Poetry</h1>
        </div>
        <div class="w-1/2 glass p-4 rounded-2xl mb-5">
            <p class="font-semibold text-xl text-center">Bienvenue sur notre site dédié à la poésie ! Découvrez un monde de créativité où vous pouvez lire les poèmes d'autres utilisateurs et partager les vôtres. Notre plateforme offre une expérience unique, car l'écriture de poèmes est accompagnée d'une image créée par Dall-e, s'inspirant de votre poème. Que vous soyez un poète débutant ou confirmé, notre communauté est ouverte à tous les amoureux de la poésie. Rejoignez-nous pour explorer la beauté des mots et des images.</p>
        </div>
        <a href="/poem"><button class="btn bg-accent hover:glass hover:duration-300 font-bold text-xl rounded-lg w-full">Explorer</button></a>
    </div>
</main>
