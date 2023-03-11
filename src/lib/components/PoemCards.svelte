<script>
    let imgSrc
    let imgAlt
    let title
    let content
    let poemId
    let styleId
    let styleName
    let userId
    let userName
    export {imgSrc, imgAlt, title, content, poemId, styleId, styleName, userName, userId}
</script>

<div class="card w-96 glass">
    <figure>
        <img src="{imgSrc}" alt="{imgAlt}" class="w-full">
    </figure>
        <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <p class="line-clamp-3">{content}</p>
            <div class="flex flex-row justify-between items-center">
                <p><a href="/style/{styleId}"><span class="badge text-md font-semibold">{styleName}</span></a></p>
                <p class="text-lg font-bold text-right">By <a href="/user/{userId}">{userName}</a></p>
            </div>
            <div class="divider"></div>
            <div class="card-actions justify-end">
                <a href="/poem/{poemId}">
                    <button class="btn">Voir plus</button>
                </a>
            </div>
        </div>

</div>