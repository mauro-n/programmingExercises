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

const getExerciseIndex = (index) => {
    return "exercise"+index;
}

export default {
    splitShort,
    expand,
    getExerciseIndex,
}