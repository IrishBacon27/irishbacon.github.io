function loader () {
    const simpleObjectButton = document.getElementById('simple-object-action');
    const functionButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    ObjectButton.onclick = function() {
        const name = myObject.getName();
        const getNameDisplay = document.getElementById('getNameDisplay');
        getNameDisplay.textContent = name;
        
        const fullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = fullName;
    }

    const myObject = new FunctionObject();
    console.log(functionObject.getFullName()); 
}

window.onload = loader;
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


function FunctionObject() {
    const firstName = 'Jonas';
    const lastName = 'Laid';

    FunctionObject.prototype.getFullName = () => {
        return firstName + ' ' + lastName;
    }
}