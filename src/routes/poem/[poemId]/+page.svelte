<script>
    export let data

</script>

<main class="py-10">
    <div class="w-3/4 mx-auto py-10 glass rounded-2xl">
        <div><img class="w-3/4 mx-auto rounded-2xl" src="{data.poem.picture}" alt="{data.poem.title}"></div>
        <div class="mt-5">
            <h1 class="text-center text-5xl font-bold">{data.poem.title}</h1>
            <div class="text-center mt-5 glass w-1/2 mx-auto rounded-2xl py-5">
                <p class="whitespace-pre-line">{data.poem.content}</p>
            </div>
            <div class=" w-1/2 mx-auto flex flex-row justify-between items-center mt-5">
                <div>
                    <a href="/style/{data.poem.styleId}"><span class="badge text-lg font-bold">{data.poem.style.name}</span></a>
                </div>
                <div>
                    <h2 class="text-3xl">By <a href="/user/{data.poem.userId}" class="link"><span>{data.poem.user.pseudo}</span></a></h2>
                </div>
            </div>
        </div>
    </div>
</main>