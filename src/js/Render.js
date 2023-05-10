import Utils from "./utils.js";

const Render = {};

Render.exerciseCard = function ({ id, description }) {
    return `
        <span id="n${id}" class="navigator-link"></span>
        <label for="card-toggler${id}" class="cs-card-container mb-4">
        <button id="card-toggler${id}" class="card-toggler text-start" data-bs-toggle="collapse" data-bs-target="#card${id}">
            Exercício ${id + 1}
        </button>
        <div class="cs-card-description container m-2">${Utils.descriptionParser(description, 50)} . . .</div>
        <span class="m-2 cs-card-category">
            <a href="###" class="badge text-white bg-secondary mb-2">Begginer</a>
        </span>
        <div class="card collapse" id="card${id}">
            <img src="./src/img/5.jpg" alt="Card image cap" class="card-img-top cs-card-img">
            <div class="card-body">                
                <h5 class="card-title">Exercício ${id + 1}</h5>                
                <p class="card-text">${description}</p>                
                <div class="text-center" onclick="scrolltoId(n${id + 1})">
                    <a class="btn btn-primary next-exercise"
                    data-bs-toggle="collapse"
                    data-bs-target="#card${id + 1}"
                    href="#n${id + 1}"> Próximo exercício </a>
                </div>
            </div>
        </div>
        </label>
        `
}


export default Render;