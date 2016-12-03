// id for displayed input to enable removal
newElementId = 0;

// Bind enter button in text box to Add button instead of Submit button
document.addEventListener("DOMContentLoaded", function(event) { 
  	var inputField = document.getElementById("inputField");
	inputField.addEventListener("keyup", function(event) {
	    event.preventDefault();
	    
	});
});

// create and display new element in a list from input
function display() {

	// get and erase input
	var input = document.getElementById("inputField").value;
	document.getElementById("inputField").value = "";

	// create and display new element from input
	newElementId++;
	var newElement = document.createElement('li');
	newElement.setAttribute('id', newElementId);
	newElement.innerHTML = input + '<button class="removeButton" type="button" onclick="removeElement('+ newElementId + '); return false;">x</a>';
	var list = document.getElementById('display');
	list.appendChild(newElement);	
}

// helper function to remove element
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// transform list items into array then submit form
function submitProcessing() {
	var list = document.getElementById('display');
	var length = document.getElementById('display').childNodes.length;
	var array = [];
	for (i = 1; i < length; i++) {
		var input = document.getElementById('display').childNodes[i].textContent;
		var remove = input.lastIndexOf("x");
		input = input.substring(0, remove);
		array.push(input);	
	}
	document.arrayForm.value = array;
	document.arrayForm.submit();
}

