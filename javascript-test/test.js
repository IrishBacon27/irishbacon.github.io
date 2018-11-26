var greeting = 'Welcome to Programming 109';

var a = 10;
var b = 15;
var surprise = 'Good evening Supreme Leader!!!!!'

console.log(greeting);
console.log('a + b = ', a + b);
console.log('a x b = ', a * b);
window.alert(surprise)

//Week 10 and possibly Object choices
window.onload = () => {
    const objectLiteralAction = document.getElementById('object-literal-action');
    const numbersAction = document.getElementById('numbers-action');

    objectLiteralAction.onclick = () => {
        const objectLiteralDisplay = document.getElementById('object-literal-display');
        console.log(objectLiteral.getName());

        objectLiteralDisplay.textContent = objectLiteral.getName();
    }