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

//week 10
window.onload = () => {
    const objectLiteralAction = document.getElementById('object-literal-action')

    objectLiteralAction.onclick = () => {
        const objectLiteralDisplay = document.getElementById('object-literal-display');
        console.log(objectLiteral.getName());

        objectLiteralDisplay.textContent = objectLiteral.getName();
    }
}

const objectLiteral = {
    objectName: 'object literal is my name',

    getName: function() {
        return this.name;
    }
}