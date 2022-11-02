var object = {
    prop: this ,
    embed:{
        embed: true,
        method: function() { return this; }
    }
};

var array = [
    this, 
    function() { return this; }
];

function global(){
    
    console.log('from global', this);

    function sub() { console.log( 'from sub', this) }

    sub();

}

global.call( object );

const person = {
    firstName : "John",
    lastName  : "Doe",
    id        : 5566,
    myFunction: function(){
        return this;
    }
};


const person1 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "John",
    lastName: "Doe",
}

// console.log(person1.fullName.call(person2));

const person3 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return this.fristName + " " + this.lastName;
    }
};

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
};

let fullName = person3.fullName.bind(member);

console.log( fullName );