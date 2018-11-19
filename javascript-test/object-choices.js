window.onload = () => {
    const simpleObjectButton = document.getElementById('simple-object-action');
    const functionButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    simpleObjectButton.onclick = () => {
        const simpleObjectDisplay = document.getElementById('simple-object-display');
    }

    functionButton.onclick = () => {
        const functionObjectDisplay = document.getElementById('function-object-display');
    }

    customClassButton.onclick = () => {
        const customClassDisplay = document.getElementById('custom-class-display');
    }

    const myObject = new FunctionObject();
    console.log(functionObject.getFullName()); 
}

//Week 10
window.onload = () => {
    const objectLiteralAction = document.getElementById('object-literal-action');
    const numbersAction = document.getElementById('numbers-action');

    objectLiteralAction.onclick = () => {
        const objectLiteralDisplay = document.getElementById('object-literal-display');
        console.log(objectLiteral.getName());

        objectLiteralDisplay.textContent = objectLiteral.getName();
    }

