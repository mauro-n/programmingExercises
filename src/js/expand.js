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

export default expand;