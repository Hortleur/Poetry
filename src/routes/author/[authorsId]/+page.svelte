<script>
    export let data
    const author = data.author
    const Component = data.Component
</script>

<main class="py-10">
    <div class="mb-20">
        <h1 class="text-center font-bold text-5xl underline">{author.pseudo}</h1>
    </div>
    <div class="flex lg:flex-row lg:justify-evenly lg:items-center">
        {#each author.poems as poem}
            <Component {poem} styleId="{poem.styleId}" imgAlt="{poem.title}" poemId="{poem.id}" content="{poem.content}" styleName="{poem.style.name}" title="{poem.title}" imgSrc="{poem.picture}" userId="{poem.userId}" userName="{poem.user.pseudo}"/>
        {/each}
    </div>
</main>