const myObject = {
    firstName: 'Jonas',
    lastName: 'Laid',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(myObject.firstName);