window.onload = () => {
    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'maroon') {
            setColor("maroonBackground");
            showChoice(value);
        } 
        else {
            setColor("aquaBackground");
            showChoice(value);
        }
    });
}

function showChoice(value) {
    console.log(value);
    const userDisplay = document.getElementById('user-choice');
    userDisplay.textContent = value;

}
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