window.onload = () => {

    const simpleObject = document.getElementById('function-calls');
    const callUserInput = document.getElementById('call-user-input')

    functionCalls.onclick = () => {
        simpleFunction();
        functionParameters("Many functions take parameters.");
        functionReturn();
        const returnValue = functionReturn()
        console.log(returnValue);
    }
//in class work
function loader () {
    const objectLiteralButton = document.getElementById('simple-object-action');
    const functionButton = document.getElementById('getFunctionObject');

    getNamesButton.onclick = function() {
        const name = myObject.getName();
        const getNameDisplay = document.getElementById('getNameDisplay');
        getNameDisplay.textContent = name;
        
        const fullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = fullName;
    }

    const functionObject = new FunctionObject();
    console.log(functionObject.getFullName());
    //console.log(functionObject.getName());
    functionButton.onclick = functionObject;
}

//Key Value pairs
//Comma separated list of key value pairs
const myObject = {
    firstName: 'Jonas',
    lastName: 'Laid',
    getName: function () {
        return this.firstName + 
            ' ' + this.lastName;
    }
};

myObject.middleName = 'barfoo';
myObject.getFullName = function () {
    return this.firstName + 
        ' ' + this.middleName + 
        ' ' + this.lastName;
}

console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);
console.log(myObject.getFullName());

function FunctionObject() {
    const firstName = 'Jonas';
    const lastName = 'Laid';

    FunctionObject.prototype.getFullName = () => {
        return firstName + ' ' + lastName;
    }
}