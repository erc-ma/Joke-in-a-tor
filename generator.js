document.addEventListener("DOMContentLoaded", () => {
	let jokeSection = document.querySelector("#joke-section");
	document.querySelector("#btn")
		.addEventListener('click', aquireJoke);

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


	
	

});


//generateBtn.addEventListener("click", aquireJoke);
