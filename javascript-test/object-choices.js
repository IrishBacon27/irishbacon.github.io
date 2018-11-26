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



