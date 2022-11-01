var car = {
    // color : "red",
    // speed : 200,
    // drive : function(){ return "drive"; }
    make  : "volvo",
    speed : 160,
    engine :{
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        //pistons: //["piston1", "piston2"]
        pistons: [{maker: "BMW"}, {maker: "BMW2"}]
    },
    drive: function(){return "drive";}
};

var shoppinglist = [
    "Apple",
    "Orange",
    "Pear"
];

var array = [
    "string",
    100,
    ["embed", 200],
    {car: "ford"},
    function(){ return "drive"; }
];


// function name()
// {
//     var fullname = "Pritom Karmokar";

//     function concat(name){

//         return "Mr. " + name;
//     }

    
//     return concat(fullname);
// }

// function name( fullname ){
//     return fullname.firstname + fullname.lastname ;
// }

// console.log(name ({firstname:"Pritom", lastname: "Karmokar"}));

function name( fullname )
{
    return fullname;
}

console.log(
    name(function(){ return "embed"; })
);

console.log(myName, printName());

var myName = "Lawrence";

function printName()
{
    // return "John Doe";
    // var a = 100;
    console.log(a, embed());

    var a = 100;

    function embed(){ return "hello"; }

    return "John Doe";
}


var engine = {
    maker: "Ford",
    headGasket: {
        pots:[
            "piston1",
            "piston2"
        ]
    }
}

// function runExpression(){
//     var a = 10;
//     function add(){
//         return a + 90;
//     }

//     return add();
// }

function runExpression()
{
    var a = 10;

    // var engine = "String engine";

    function add(){
       
        test = "New String";
    }

    add();
}

var object = {
    prop: this,
    method: function() { return this; }
}

var array = [
    this,
    function(){ return this; }
];

function global(){
    return this;
}

global.call( object );

new global();

// function Apple(x, y, color, score)
// {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.score = score;
// }

// new Apple( 10, 20, "red", 200);

function Apple(color, weight)
{
    this.color = color;
    this.weight = weight;
    // this.eat = function(){ return "eat the apple."; };
    // this.throw = function() { return "throw the apple"; };
}

Apple.prototype = {
    eat   : function(){ return this;     },
    throw : function(){ return "throw the apple";   }
};

var apple1 = new Apple("red", 99);
var apple2 = new Apple("green", 109);
var apple3 = new Apple("yellow", 299);