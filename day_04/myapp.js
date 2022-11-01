// console.log( document.getElementById('hello') );

pHello = document.getElementById('hello');
pHello.innerText = "new world";
pHello.innerHTML += " order <span>hello world</span>"

var spanH1 = document.querySelectorAll('h1 span');

spanH1[0].innerHTML = "new text here!!";