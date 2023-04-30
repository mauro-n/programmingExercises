const exerciseConstructor = () => {
    const header = document.createElement("div");
    header.classList.add("exercise__header");

    const headerTitle = document.createElement("div");
    headerTitle.classList.add("exercise__header__title");

    const arrowImg = document.createElement("img");
    arrowImg.classList.add("exercise__arrow", "expandable");
    arrowImg.src = "./src/img/down-arrow.png";

    const headerArrow = document.createElement("div");
    headerArrow.classList.add("exercise__header__arrow");
    headerArrow.appendChild(arrowImg);
    
    header.appendChild(headerTitle);
    header.appendChild(headerArrow);

    const short = document.createElement("div");
    short.classList.add("exercise__short");

    const level = document.createElement("div");
    level.classList.add("exercise__level");
    level.textContent = "Begginer";

    const banner = document.createElement("img");
    banner.classList.add("exercise__banner");

    const caption = document.createElement("div");
    caption.classList.add("exercise__caption");

    const nextBtn = document.createElement("a");
    nextBtn.textContent = "Próximo";
    nextBtn.classList.add("exercise__nextButton");

    const article = document.createElement("article");
    article.classList.add("exercise", "expandable", "display-none");

    article.appendChild(header);
    article.appendChild(short);
    article.appendChild(level);
    article.appendChild(banner);
    article.appendChild(caption);
    article.appendChild(nextBtn);

    return article;
}

export default exerciseConstructor;
