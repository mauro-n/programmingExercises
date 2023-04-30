const liConstructor = (i) => {
    const li = document.createElement("li");
    li.classList.add("menu__item");
    
    const a = document.createElement("a");
    a.textContent = "Exercício " + (i + 1);
    a.href = `#e${i}`;

    li.appendChild(a);
    return li;
}

export default liConstructor;