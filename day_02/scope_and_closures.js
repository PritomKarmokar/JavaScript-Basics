var engine = {
    maker: "Ford",
    headGasket: {
        pots:[
            "piston1",
            "piston2"
        ]
    }
}

function runExpression()
{
    var a = 10;

    function add()
    {
        var b = 90;

        return a + b;
    }
    
    return add();
}