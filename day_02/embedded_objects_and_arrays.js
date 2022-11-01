// An object can contain many objects.

var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        // pistons: ["pistion1", "piston2"]
        pistons: [ {maker: "BMW"}, {maker: "BMW2"} ]
    },

    drive: function() { return "drive"; }
    
};

// An array can also contain many objects.
var array = [
    "string",
    100, 
    ["embed", 200], 
    {car: "ford"},
    
    // We can also define a function in the array.
    // But we cannot define a name here like the aboce 'drive' method because here 'key' is a number.
    function() { return "drive"; }
];