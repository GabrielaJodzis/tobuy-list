var button = document.getElementById("enter");
var delButton = document.getElementsByClassName("delete");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	var newDelButton = document.createElement("button");
	newDelButton.appendChild(document.createTextNode("DELETE"));
	newDelButton.classList.add("delete");
	li.appendChild(newDelButton);

	ul.appendChild(li);

	input.value = "";

	newDelButton.addEventListener("click", deleteItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function getEventTarget(e) {
	return e.target || e.srcElement;
}

function getEventTargetDone(event) {
    var target = getEventTarget(event);
    target.classList.toggle("done");
}

function deleteItem(t) {
	var target = getEventTarget(t);
	target.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

Array.from(delButton).forEach(function(button) {
	button.addEventListener("click", deleteItem);
})

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", getEventTargetDone)