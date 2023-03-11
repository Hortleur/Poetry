<script>
    export let data
    console.log(data)
    const {styles} = data
</script>

<main class="py-10">
    <h1 class="text-center text-5xl font-cursive">Styles de Poèmes</h1>
    <div>
        {#each styles as poemStyle}
            <div class="border-b-2 border-b-accent w-full">
                <div>
                    <a href="/poemstyle/{poemStyle.id}"><h2>{poemStyle.name}</h2></a>
                </div>
                <div>
                    <p>{poemStyle.description}</p>
                </div>
                <div>

                </div>
            </div>
            {/each}
    </div>
</main>