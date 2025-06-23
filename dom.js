// 4 pillars of DOM

// 1- selecting elements
// 2- changing HTML
// 3- chaning CSS
// 4- event listner
let bulb = document.getElementById("bulb");
let btn = document.querySelector("button");

let swit = 0;

btn.addEventListener("click", function () {
	btn.innerHTML = "OF";
	if (swit == 0) {
		bulb.style.backgroundColor = "yellow";
		console.log("click on");
		swit = 1;
	} else {
		bulb.style.backgroundColor = "white";
		btn.innerHTML = "ON";
		console.log("button Of");
		swit = 0;
	}
});

let body = document.querySelector("body");
body.style.backgroundColor = "black";
// 1- selecting elements
let a = document.querySelector("h1");

a.innerHTML = "Hello we are doing DOM practice from javascript";
a.style.color = "red";
a.style.fontSize = "20px";
a.addEventListener("click", function () {
	a.innerHTML = "event changed after clicked";
	a.style.color = "yellow";
});

console.log(a);

let b = document.querySelector("p");
b.textContent = "Lets make a bulb with on off functionlaity by js";
b.style.color = "white";
console.log(b);
