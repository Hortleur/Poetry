<script>
    export let data
    const poems = data.poems
    const Component = data.Component
</script>

<main class="flex lg:flex-row lg:justify-evenly lg:items-center h-screen">
    <div>
        {#each poems as poem}
            <Component {poem} styleId="{poem.styleId}" imgAlt="{poem.title}" poemId="{poem.id}" content="{poem.content}" styleName="{poem.style.name}" title="{poem.title}" imgSrc="{poem.picture}" userId="{poem.userId}" userName="{poem.user.pseudo}"/>
        {/each}
    </div>
    <div>
        <h1>Partagez le votre</h1>
        <div>
            <form action="" method="post">
                <label for="pseudo">
                    <input placeholder="Votre Pseudo" id="pseudo">
                </label>
            </form>
        </div>
    </div>
</main>