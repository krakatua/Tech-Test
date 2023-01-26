
window.addEventListener('DOMContentLoaded', async () => {

    const $postList = document.querySelector(".news__wrapper")

    const getPots = async () => {
        const res = await fetch ("https://inshorts.deta.dev/news?category=all");
        return await res.json();
    }

    function insertNewPost(post) {
        return `<div class="new">
            <figure class="figure__wrapper">
                <img src=${post.imageUrl} class="new__img">
                <span class="news__popper">More Details...</span>
            </figure>
            <p class="new__para">${post.content.substring(0, 90)}.</p>
        </div>
        `;
    }

    try {
        const posts = await getPots();
        $postList.innerHTML = posts.data.slice(0,6)
        .map((post) => insertNewPost(post))
        .join("");
    } catch (err) { }

});

