//0
document.addEventListener("DOMContentLoaded", () => {
	let jokeSection = document.querySelector("#joke-section");
	let scheduleStatus = document.querySelector("#schedule-status");
	let counter = 0;
	let maxDays = 0;

	document.querySelector("#genButton")
		.addEventListener('click', aquireJoke);

		document.querySelector("#sendButton")
			.addEventListener('click', sendMail);
			document.querySelector("#scheduleButton")
			.addEventListener('click', scheduleStart);

	const options = {
		method: 'GET', // specify this is a GET request, not a PUT or POST
		headers: {
			"Accept": "application/json" // request the response in JSON format
		}
	}

	function aquireJoke() {
		jokeSection.classList.remove("content-fade");

		fetch('https://icanhazdadjoke.com/', options)
			.then(response => {
				return response.json();
			})
			.then(responseAsJson => {
				jokeSection.innerText=`${responseAsJson.joke}`;

				jokeSection.classList.add("content-fade");
			})
			.catch(error => {
				console.error(error);
			})
	}

	function scheduleStart(){
		maxDays = document.getElementById('numDays').value
		scheduleStatus.innerText="Subsciption Active!"
		var timer = setInterval(function() { 
   
			if (counter >= maxDays) { 
			  if (timer) { 
				clearInterval(timer); 
				counter = 0;
				scheduleStatus.innerText="Subscibe for more jokes!"
			  } 
			} 
		   
			sendMail();
			counter ++;
			console.log(counter)
		   
		  }, (1000 * 60 * 60 * 24)); 

	}


	function sendMail(){
		var joke;
		fetch('https://icanhazdadjoke.com/', options)
			.then((response) => response.json())
			.then ((data) => joke = data.joke)
			.then(() => sendEmail(joke))
	}

	function sendEmail(joke){
		var templateParams = {
			message: joke
		}
		console.log(joke)
		emailjs.send('service_erni648', 'template_ngn7u3e', templateParams)
		.then(function(response) {
		   console.log('SUCCESS!', response.status, response.text);
		}, function(error) {
		   console.log('FAILED...', error);
		});
	}


	
	

});


//generateBtn.addEventListener("click", aquireJoke);
