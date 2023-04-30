const splitShort = (string, length) => {
    const result = [];

    for (let i = 0; i < string.length; i++) {
        result.push(string.slice(0, length));
    }

    return result;
}

const expand = (div) => {
    if (!div.classList.contains("expandable")) {
        return;
    }

    if (div.classList.contains("exercise__arrow")) {
        const exercise = (div.parentElement).parentElement.parentElement;

        if (exercise.classList.contains("exercise--expanded")) {
            exercise.classList.remove("exercise--expanded");
            return;
        }
        exercise.classList.add("exercise--expanded");
        return;
    }

    if (div.classList.contains("exercise--expanded")) {
        div.classList.remove("exercise--expanded");
        return;
    }

    div.classList.add("exercise--expanded");
    return;
}

const expandAll = (el) => {
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add("exercise--expanded");
    }
}

const getExerciseIndex = (index) => {
    return "exercise"+index;
}

const contractDropDown = (el) => {
    el.checked = false;
}

export default {
    splitShort,
    expand,
    getExerciseIndex,
    expandAll,
    contractDropDown,
}