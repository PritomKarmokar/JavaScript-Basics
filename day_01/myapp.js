console.log( "Hello World" )
console.log( 200 )
console.log( true )
console.log( 10 )

var num = 10;
console.log( num )
console.log("string", 10.11, true, false, null, num)

function makeCoffee( sugar, milk )
{
    var instructions = "Boil water";

    instructions += " pour into cup, ";

    instructions += " add coffee granules, ";

    instructions += " add " + sugar + " spoons of sugar, ";

    instructions += " add " + milk + "% milk.";
    
    return instructions;
}

console.log( makeCoffee(2, 20) );