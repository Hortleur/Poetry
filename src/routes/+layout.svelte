<script>
    import "../app.css"
</script>

<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content relative bg-gradient-to-bl from-primary via-secondary to-base-100">
        <label for="my-drawer" class="btn btn-circle btn-secondary border-2 border-amber-500 drawer-button font-cursive absolute text-4xl font-bold top-4 left-4 hover:scale-125 hover:duration-150 hover:border-amber-500">P</label>
        <slot />
    </div>
    <div class="drawer-side ">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-accent text-base-content">
            <li><a href="/">Acceuil</a></li>
            <li><a href="/poem">Poèmes</a></li>
            <li><a href="/poemstyle">Styles</a></li>
        </ul>
    </div>
</div>
