window.onload = () => {

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        languageNames: ['JavaScript', 'HTML', 'CSS', 'Python', 'C/C+'],
        languagePopularity: [
            {
                language: 'JavaScript',
                rank: 1
            },
            {
                language: 'HTML',
                rank: 2
            },
            {
                language: 'CSS',
                rank: 3
            },
            {
                language: 'Python',
                rank: 4
            },
            {
                language: 'C/C+',
                rank: 5,
            }
    
        ]
    };
    
    const numbersAction = document.getElementById('numbers-action');
    const languageNamesAction = document.getElementById('tech-language-names-action');
    const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        for (let number of arrays.numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }
    };

    languageNamesAction.onclick = () => {
        const languageNamesDisplay = document.getElementById('tech-language-names-display');
        for (language of arrays.languageNames.sort()) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(language));
            languageNamesDisplay.appendChild(li);
        }
    };

    techLanguagePopularityAction.onclick = () => {
        const techLanguagePoplularityDisplay = document.getElementById('tech-language-popularity-display');
        arrays.languagePopularity.sort(compareRank);

        techLanguagePoplularityDisplay.innerHTML = '';

        for (let language of arrays.languagePopularity) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(language.language + ' rank: ' + language.rank));
            techLanguagePoplularityDisplay.appendChild(li);
        }
    };

};

function compareRank(a, b) {
    const rankA = a.rank;
    const rankB = b.rank;

    let comparison = 0;
    if (rankA > rankB) {
        comparison = 1;
    } else if (rankA < rankB) {
        comparison = -1;
    }
    return comparison;
}

