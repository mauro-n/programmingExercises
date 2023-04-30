import exercises from './data.js';
import utils from './utils.js';
import exerciseConstructor from './exerciseConstruc.js';

window.onload = () => {
    const exercisesContainer = document.querySelector(".exercisesContainer");

    for (let exercise in exercises) {
        exercisesContainer.appendChild(exerciseConstructor());
    }

    const allExercises = document.querySelectorAll(".exercise");
    const allTitles = document.querySelectorAll(".exercise__header__title");
    const allShorts = document.querySelectorAll(".exercise__short");
    const allDescriptions = document.querySelectorAll(".exercise__caption");
    const shortLength = 30;

    let i = 0;
    for (let exercise in exercises) {
        allExercises[i].classList.remove("display-none");
        allTitles[i].textContent = "Exercício " + (i + 1);
        const short = utils.splitShort(exercises[utils.getExerciseIndex(i)].description, shortLength);
        allShorts[i].textContent = short[0] + "...";
        allDescriptions[i].textContent = exercises[utils.getExerciseIndex(i)].description;
        i++;
    }

    exercisesContainer.addEventListener("click", (e)=> {
        utils.expand(e.target);
    });
}