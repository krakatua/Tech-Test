const newsList = document.querySelector(".news__wrapper")

async function main () {
    const news = await fetch ("https://inshorts.deta.dev/news?category=all");
    const newsData = await news.json();
    console.log(newsData);

    const random = newsData[Math.floor(Math.random() * newsData.length)];
    console.log(random, newsData[random])

    newsList.innerHTML = newsData.data.slice(0,6).map((newsopt) => newsHTML(newsopt)).join("");


}

main()


function newsHTML(newxsopt) {
    return `<div class="new">
    <figure class="figure__wrapper">
        <img src=${newsopt.imageUrl} class="new__img">
        <span class="news__popper">More Details...</span>
    </figure>
    <p class="new__para">${newsopt.content.slice(0,100)}.</p>
</div>
`;
}

