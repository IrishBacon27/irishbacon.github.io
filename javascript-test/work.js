var person = {
    firstName: 'Jonas',
    lastName: 'Laid',
    fullName: function () {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};


function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

divider('Person');

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

var calculator = {
    operand01: person.firstName.length,
    operand02: person.lastName.length,
    add: function () {
        'use strict';
        return this.operand01 + this.operand02;
    },
    subtract: function () {
        'use strict';
        return this.operand01 - this.operand02;
    }

}

calculator.multiply = calculator.operand01 * calculator.operand02;

function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

divider('Calculator');
console.log('operand01 = ', calculator.operand01);
console.log('operand02 = ', calculator.operand02);
console.log('Add: ', calculator.add());
console.log('Subtract: ', calculator.subtract());
console.log('Multiply: ', calculator.multiply);