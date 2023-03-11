<script>
    export let data

</script>

<main class="py-10">
    <div class="w-3/4 mx-auto py-10 glass rounded-2xl">
        <div><img class="w-3/4 mx-auto rounded-2xl" src="{data.poems.picture}" alt="{data.poems.title}"></div>
        <div class="mt-5">
            <h1 class="text-center text-5xl font-bold"></h1>
            <div class="text-center mt-5 glass w-1/2 mx-auto rounded-2xl py-5">
                <p class="whitespace-pre-line">{data.poems.content}</p>
            </div>
            <div class=" w-1/2 mx-auto flex flex-row justify-between items-center mt-5">
                <div>
                    <a href="/poemstyle/{data.poems.styleId}"><span class="badge text-lg font-bold">{data.poems.style.name}</span></a>
                </div>
                <div>
                    <h2 class="text-3xl">By <a href="/user/{data.poems.userId}" class="link"><span>{data.poems.user.pseudo}</span></a></h2>
                </div>
            </div>
        </div>
    </div>
</main>