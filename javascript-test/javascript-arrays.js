window.onload = () => {

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    }
}

let compareTool = comparLanguage;

const numbersActio = document.getElementById('numbers-action');
const languageNamesAction = document.getElementById('tech-language-names-action');
const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');

numbersAction.onclick = () => {
    const numbersDisplay = document.getElementById('numbers-display');
    for (let number of arrays.numbers) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(number))
        numbersDisplay.appendChild(li);
    }
};

languageNamesAction.onclick = () => {
    const languageNamesDisplay = document.getElementById('tech-laguage-display');

    for (language of arrays.languageNames.sort()) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(number))
        languageNamesDisplay.appendChild(li);
    }
}

techLanguagePoplularityAction.onclick = () => {
    const techLanguagePoplularityDisplay = document.getElementById('tech-language-popularity');

    arrays.techLanguagePopularity.sort(compareTool);
}