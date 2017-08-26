var outputTarget = document.getElementById("output-target");

var sectionContainer = document.getElementById("sectionContainer");

var pageTitle = document.getElementById("page-title");

var keyPress = document.getElementById("keypress-input");

var blueButton = document.getElementById("add-color");

var guineaPig = document.getElementById("guinea-pig");

var hulkify = document.getElementById("make-large");

var captureIt = document.getElementById("add-border");

var rounded = document.getElementById("add-rounding");

sectionContainer.addEventListener("click", function(e){console.log(e);
	outputTarget.innerHTML = `You clicked on the ${e.target.innerHTML} section`
});

pageTitle.addEventListener("mouseenter", function(e){
	outputTarget.innerHTML = "You moved you mouse over the header";
})

pageTitle.addEventListener("mouseout", function(e){
	outputTarget.innerHTML = "You left me";
})

keyPress.addEventListener("keypress", function(e){
	outputTarget.innerHTML = e.target.value + e.key;
});

blueButton.addEventListener("click", function(e){
	guineaPig.classList.add("blue");
})

hulkify.addEventListener("click", function(e){
	guineaPig.classList.add("tfont");
})

captureIt.addEventListener("click", function(e){
	guineaPig.classList.add("textBorder");
})

rounded.addEventListener("click", function(e){
	guineaPig.classList.add("roundMe");
})

