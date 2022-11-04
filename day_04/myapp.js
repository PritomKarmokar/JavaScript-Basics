// console.log( document.getElementById('hello') );

// If we write console.dir() it'll print an interactive list so we can view the object that actually is.

// console.dir( document.getElementById( 'hello' ));

//document.getElementById( 'hello' ).innerHTML += " order";

var pHello = document.getElementById('hello');

pHello.innerText = "new world";

// pHello.innerText += " order <span>hello world</span>";
// The above statement will simply put the Text inside the quotation where <span> tags are also included.

pHello.innerHTML += " order <span>Hello world</span>"
// But the 'innerHTML' will allow us to create html content in the actual element itself.

pHello.outerHTML = '<h2 id="hello">new world order <span>hello world</span></p>';

var spanH1 = document.querySelectorAll('h1 span');
// This returns an array so we can't use innerHTML type of things. instead we'll be using array type indexing.

var spanH2 = document.querySelectorAll('h1 span')[0]

spanH2.innerHTML = "new text here!!";

// Be careful when we're working with 'getElementsByClassName', 'getElementsByTagName', 'querySelectorAll()'