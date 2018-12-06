window.onload = () => {
    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'language') {
            showChoice(value);
        } else {
            showChoice(value);
        }
    });
}

function showChoice(value) {
    console.log(value);
    const userDisplay = document.getElementById('user-choice');
    userDisplay.textContent = value;

}

const myForm = document.getElementById('sort-type');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.querySelector('input[name="sorter"]:checked').value;
    if (value.toLowerCase() === 'green') {
        setColor("blueBackground");
        showChoice(value);
    } else {
        setColor("greenBackground");
        showChoice(value);
    }
});

let currentClass = null;

const setColor = (className) => {
    console.log("SET CLASS TO", className);
    var element = document.getElementById("form-section");
    if (currentClass) {
        element.classList.remove(currentClass);
    }
    currentClass = className;
    element.classList.add(className);
}

// css swap example
window.onload = () => {

    const appearanceButton = document.getElementById('appearanceAction');

    appearanceButton.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        disableStylesheet(defaults);
        enableStylesheet(basic);
    }
    const appearanceButton2 = document.getElementById('defaultAppearanceAction');

    appearanceButton2.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        disableStylesheet(basic);
        enableStylesheet(defaults);
    }

}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}     