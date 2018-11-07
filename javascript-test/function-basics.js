window.onload = () => {
    const simpleFunctionParagraph = document.getElementById('simple-function');
    const functioncalls = document.getElementById('function-calls');

    functionCalls.onclick = () => {
        simpleFunction();
    }
}

function simpleFunction() {
    console.log("functions should consist of statements designed to perform a single task")
    simplefunctionParagraph.textContent = 'some value';
}

function functionParameters(value) {
    console.log(value)
}

function add(a, b) {
    console.log(a + b);
}

function adder() {
    console.log(2 +3);
}

simpleFunction();
functionParameters("many functions take parameters");
add(2, 3);
adder();
