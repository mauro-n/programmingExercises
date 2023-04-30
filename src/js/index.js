import exercises from './data.js';
import utils from './utils.js';
import exerciseConstructor from './exerciseConstruc.js';
import liConstructor from './liConstruc.js';

window.onload = () => {
    const exercisesContainer = document.querySelector(".exercisesContainer");
    const menuItems = document.querySelector("#menu__items");

    let i1 = 0;
    for (let exercise in exercises) {
        exercisesContainer.appendChild(exerciseConstructor());
        menuItems.appendChild(liConstructor(i1));
        i1++;
    }

    const allExercises = document.querySelectorAll(".exercise");
    const allBanners = document.querySelectorAll(".exercise__banner");
    const allTitles = document.querySelectorAll(".exercise__header__title");
    const allShorts = document.querySelectorAll(".exercise__short");
    const allDescriptions = document.querySelectorAll(".exercise__caption");
    const allNextBtn = document.querySelectorAll(".exercise__nextButton");
    const menuItem = document.querySelectorAll(".menu__item");
    const dropdownMenu = document.querySelector("#toggle1");
    const shortLength = 50;

    for (let i = 0; i < allNextBtn.length; i++) {
        allNextBtn[i].addEventListener("click", () => {
            utils.expandAll(allExercises);
        });
        menuItem[i].addEventListener("click", () => {
            utils.expandAll(allExercises);
            utils.contractDropDown(dropdownMenu);
        })
    }

    let i = 0;
    for (let exercise in exercises) {
        allExercises[i].classList.remove("display-none");
        allExercises[i].id = "e"+i;
        allBanners[i].src = `./src/img/${utils.randomNum(5)}.jpg`;
        allTitles[i].textContent = "Exercício " + (i + 1);
        const short = utils.splitShort(exercises[utils.getExerciseIndex(i)].description, shortLength);
        allShorts[i].textContent = short[0] + "...";
        allDescriptions[i].textContent = exercises[utils.getExerciseIndex(i)].description;
        allNextBtn[i].href = `#e${i+1}`
        i++;
    }

    exercisesContainer.addEventListener("click", (e)=> {
        utils.expand(e.target);
    });
}