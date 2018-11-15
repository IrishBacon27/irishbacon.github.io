window.onload = () => {
    const feetToInchesAction =
        document.getElementById('feet-to-inches-action');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feet-to-inches-input');
        const feetToInchesDisplay = document.getElementById('feet-to-inches-display');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };
};

const milesToFeetAction =
    document.getElementById('miles-to-feet-action');

milesToFeetAction.onclick = () => {
    const milesToFeetInput = document.getElementById('miles-to-feet-input');
    const milesToFeetDisplay = document.getElementById('miles-to-feet-display');

    milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
};





