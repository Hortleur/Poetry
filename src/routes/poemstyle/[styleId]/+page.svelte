<script>
    export let data

    const style = data.poemStyles
    console.log(style)
</script>

<main class="py-20">
    <div>
        <h1 class="text-center text-5xl font-cursive">{style.name}</h1>
    </div>
</main>