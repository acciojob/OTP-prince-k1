//your JS code here. If required.
const input = document.querySelectorAll(".code");
for(let i = 0; i < input.length; i++){
	input[i].addEventListener('keyup', onFocus);
}

function onFocus(event){
	if(event.keyCode === 8){
		event.target.value = "";
		if(event.target.previousElementSibling)
		event.target.previousElementSibling.focus();
	}
	else{
		// console.log(event.target);
		if(event.target.nextElementSibling)
		event.target.nextElementSibling.focus();
	}
}