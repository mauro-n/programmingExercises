import exercises from './data.js';

const getExerciseIndex = (index) => {
    return "exercise"+index;
}

window.onload = () => {
    const allTitles = document.querySelectorAll(".exercise__header__title");
    
    for (let i = 0; i < allTitles.length; i++) {
        allTitles[i].textContent = exercises[getExerciseIndex(i)].description;
    }
}