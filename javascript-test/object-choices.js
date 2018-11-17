function loader () {
    const getNamesButton = document.getElementById('getNames');
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