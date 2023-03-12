<script>
    export let data
    const {styles} = data
</script>

<main class="py-10">
    <h1 class="text-center text-5xl font-cursive">Styles de Poèmes</h1>
    <div class="mt-20">
        {#each styles as poemStyle}
            <div class="border-b-2 border-b-accent w-full flex flex-row flex-nowrap justify-between items-center px-7 pb-2 mt-8">
                <div>
                    <a href="/poemstyle/{poemStyle.id}" class="btn btn-accent rounded-xl"><h2 class="text-lg">{poemStyle.name}</h2></a>
                </div>
                <div>
                    <p class="font-bold italic">{poemStyle.description}</p>
                </div>
                <div>
                    <span class="badge">{poemStyle.poem.length}</span>
                </div>
            </div>
            {/each}
    </div>
</main>