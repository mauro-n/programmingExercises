import ApiRequest from "./ApiRequest.js";
import Render from "./Render.js";

function scrolltoId(id, el) {
    console.log(id);

    el.removeEventListener("click", () => {
        scrolltoId(nextExerciseBtn.dataset.bsTarget)
    })
};

const URL = "https://mauro-n.github.io/api-mauro-n/exercicios-api/v1/data.json";


window.onload = async () => {


    const cardsContainer = document.getElementById("cards-container");


    

    /* nextExerciseBtn.addEventListener("click", () => {
        scrolltoId(nextExerciseBtn.dataset.bsTarget, nextExerciseBtn)
    }); */


    cardsContainer.addEventListener("click", (e) => {
        if (e.target.getAttribute("aria-expanded") == "true") {
            e.target.classList.add("hide-children");            
        } else {
            e.target.classList.remove("hide-children");
        }
    })

    const { exercises } = await ApiRequest.get(URL);
    const cardsContent = exercises.map(Render.exerciseCard).join("");
    cardsContainer.innerHTML = cardsContent;

}

