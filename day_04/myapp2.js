var el = document.getElementById('style');

// el.style.background = "blue";
// el.style.color = "white";
// el.style.width = "200px";

// It is better to apply the below method for modifying css text cause the above approach may cause rendering problem.
// el.style.cssText = " background:blue; color: white; width: 200px ";

// el.style.cssText += " height: 200px";

console.log( getComputedStyle( el ) );