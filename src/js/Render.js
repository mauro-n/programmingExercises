import Utils from "./utils.js";

const Render = {
    exerciseCard: ({id, description}) => {
        return `
        <div class="cs-card-container mb-4">
        <button class="card-toggler text-start" data-bs-toggle="collapse" data-bs-target="#card${id}">
            Exercício ${id + 1}
        </button>

        <div class="cs-card-description container m-2">${Utils.descriptionParser(description, 50)} . . .</div>

        <span class="m-2 cs-card-category">
            <a href="###" class="badge text-white bg-secondary mb-2">Begginer</a>
        </span>

        <div class="card collapse" id="card${id}">
            <img src="./src/img/1.jpg" alt="Card image cap" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Exercício ${id + 1}</h5>
                <p class="card-text">${description}</p>
                <div class="text-center"><a href="#" class="btn btn-primary">Próximo exercício </a></div>
            </div>
        </div>
        </div>
        `
    }
}

export default Render;