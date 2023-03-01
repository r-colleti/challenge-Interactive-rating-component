function processRate() {
	var rate = document.querySelector('input[name="rateValue"]:checked').value;

	event.preventDefault();

	document.querySelector('.rateForm').style.display = 'none';
	document.querySelector('.rateMessage').style.display = 'flex';

	document.querySelector('.rateParagraph').innerHTML="You selected " + rate + " out of 5";
}