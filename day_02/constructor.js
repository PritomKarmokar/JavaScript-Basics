// Naming convention : constructor function's name must start with capital letter.

function Apple( x, y, color, score){
    
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;

    // return this;

    // We don't need to write 'return this' it will automatically return the values.
}

var apple1 = new Apple(10, 20, "red", 200);