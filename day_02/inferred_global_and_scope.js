var engine = {
    maker: "Ford",
    headGasket: {
        maker: "Golf",
        pots: [
            "piston1",
            "piston2"
        ]
    }
};

function runExpression()
{
    var a = 10;
    function add()
    {
        var engine = "String engine";
        
        console.log( engine );
    }
    
    add();
}