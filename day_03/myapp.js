
// If else statement

var carsLeft = 1,
    carsRight = 0,
    greenMan = "no";

// if( greenMan === "no"){
//     console.log( 'cross the road' ); 
// }
// else if( carsLeft === 0){
//     console.log("All clear! Cross the road");
// }

if( greenMan === "yes" )
{
    console.log('cross the road');
}
else if( greenMan === "yes" && carsLeft === 0 || carsRight === 0){
    console.log('All clear! Cross the road');
}
else{
    console.log("Stay where you are!")
}

// For loop statement:

var classRegister = ["Lawrence", "John", "Jeff"];

// console.log( classRegister[1] )

for(var i = 0; i < classRegister.length; i++){
    console.log(classRegister[i]);
}

for(var index in classRegister){
    console.log(classRegister[index]);
}

var symbolName = "value reference in memory";
let letSymbol = "scoped value";
const symName = "constant value in memory";
