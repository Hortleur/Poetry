<script>
    import {fade} from "svelte/transition";
    import PoemCards from "$lib/components/PoemCards.svelte";

    export let data

    const style = data.poemStyles
</script>

<main class="py-20" in:fade out:fade>
    <div>
        <h1 class="text-center text-5xl font-cursive">{style.name}</h1>
    </div>
    <div class=" flex lg:flex-row lg:justify-around lg:flex-wrap mt-20">
        {#each style.poem as stylePoems}
            <PoemCards styleId="{stylePoems.styleId}" imgAlt="{stylePoems.title}" poemId="{stylePoems.id}" content="{stylePoems.content}" styleName="{stylePoems.style.name}" title="{stylePoems.title}" imgSrc="{stylePoems.picture}" userId="{stylePoems.userId}" userName="{stylePoems.user.pseudo}" />
        {/each}
    </div>
</main>