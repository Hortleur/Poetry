<script>
    import {fade} from "svelte/transition";
    export let data
    const poems = data.poems
    const Component = data.Component
</script>

<main class="flex pt-20 lg:flex-row lg:justify-evenly lg:items-center h-screen" in:fade out:fade>
    {#each poems as poem}
        <Component {poem} styleId="{poem.styleId}" imgAlt="{poem.title}" poemId="{poem.id}" content="{poem.content}" styleName="{poem.style.name}" title="{poem.title}" imgSrc="{poem.picture}" userId="{poem.userId}" userName="{poem.user.pseudo}"/>
    {/each}
</main>