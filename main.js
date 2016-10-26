//step 1 - getting reference to form inputs

//get a reference to the each of the of inputs within the form element.
//pull out children within a form using a shortcut

var submitForm = document.getElementById("RF-1");
var firstNameInput = submitForm.elements["first-name"]; //this works because we are looking inside of Register Form
var lastNameInput = submitForm.elements["last-name"];
var artInput = submitForm.elements["art"];




smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});


//step 2 - handling form submit

//we create an anonymous functions that uses the 
//firstNameInput/lastNameInput and prints it out
//we need to bind this function to the forms submit event
//i.e. when one clicks on the submit button
//so that the function will only run once it is hit

	var firstName;
	var lastName;
	var art;


//event listener = waiting for the submit button to be clicked
submitForm.addEventListener("submit", function (event) {
	//this is inside the () of the event listener so that 
	//JS/computer waits for the exact details of this function
	//to happen

	event.preventDefault();
	//above is to prevent the window to refresh when the submit
	//button is clicked, because that's what the default is
	//if this happens we'd lose all our JS data

	 firstName = firstNameInput.value;
	 lastName = lastNameInput.value;
	 art = artInput.value;

	if ((firstName !== "") && (lastName !== "") && (art !== "")){
		var message = "Welcome " + firstName + " " + lastName + "!";

		firstName = firstNameInput.value;
	 	lastName = lastNameInput.value;
		art = artInput.value;

		var header = document.createElement("h1");
		header.textContent = message;
		var welcomePrintOut = document.querySelector("#welcome-print-out");
		welcomePrintOut.appendChild(header);

		var anchor = document.querySelector("#bg2");
		smoothScroll.animateScroll( anchor );

		

		
	} 
	else{
		alert("You must enter a first and last name, as well as the kind of art you do!")
	}
});



var submitForm2 = document.getElementById("RF-2");
var imageOneInput = submitForm2.elements["image1"]; //this works because we are looking inside of Register Form
var imageTwoInput = submitForm2.elements["image2"];

	var imageOne;
	var imageTwo;



submitForm2.addEventListener("submit", function(event){

	event.preventDefault();

	 imageOne = imageOneInput.value;
	 imageTwo = imageTwoInput.value;

	if((imageOne !== "") && (imageTwo !== "")){
		var imageOneDisplayed = document.createElement("img");
		imageOneDisplayed.src = imageOne;
		imageOneDisplayed.id = "image-one"
		imageOneDisplayed.className = "images"
		document.body.appendChild(imageOneDisplayed);

		var imageTwoDisplayed = document.createElement("img");
		imageTwoDisplayed.src = imageTwo;
		imageTwoDisplayed.id = "image-two"
		imageTwoDisplayed.className = "images"
		document.body.appendChild(imageTwoDisplayed);

		var anchor = document.querySelector("#bg4");
		smoothScroll.animateScroll( anchor );

		
	} else{
		alert("You must enter two image links!");
	}

});

var submitForm3 = document.getElementById("RF-3");
var bgColorInput = submitForm3.elements["background-color"];
var txtColorInput = submitForm3.elements["text-color"];

submitForm3.addEventListener("submit", function(event){

	event.preventDefault();

	var bgColor = bgColorInput.options[bgColorInput.selectedIndex].value;
	var txtColor = txtColorInput.options[txtColorInput.selectedIndex].value;

	var finalBg = document.querySelector("#bg6");
	finalBg.style.background = bgColor;
	finalBg.style.zIndex = "1";

	var header = document.createElement("h1");
	header.style.color = txtColor;
	header.textContent = firstName + " " + lastName;
	header.id = "final-header";
	document.body.appendChild(header);

	var about = document.createElement("h3");
	about.textContent = "About";
	about.style.color = txtColor;
	about.id = "about-tag";
	document.body.appendChild(about);

	var work = document.createElement("h3");
	work.textContent = "Work";
	work.style.color = txtColor;
	work.id = "work-tag";
	document.body.appendChild(work);


	var tagLine = document.createElement("h4");
	tagLine.style.color = txtColor;
	tagLine.textContent = art;
	tagLine.id = "tagline";
	document.body.appendChild(tagLine);

	var imageOneFinal = document.createElement("img");
	imageOneFinal.src = imageOne;
	imageOneFinal.id = "image-one-final";
	document.body.appendChild(imageOneFinal);

	var imageTwoFinal = document.createElement("img");
	imageTwoFinal.src = imageTwo;
	imageTwoFinal.id = "image-two-final";
	document.body.appendChild(imageTwoFinal);

	var footer = document.createElement("h4");
	footer.textContent = "This is a mock-up of what the artist hopes to create in her " +  
	"final iteration of this piece. Eventually you'll be able to design a website in minutes " + 
	"by just answering a few simple questions. " + "\u00A9"  + "Dominique Goncalves, 2016";
	footer.style.color = txtColor;
	footer.id = "final-footer";
	document.body.appendChild(footer);


	var anchor = document.querySelector("#bg6");
		smoothScroll.animateScroll( anchor );
	

});


