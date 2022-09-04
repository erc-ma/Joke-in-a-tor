# Joke-in-a-tor
Emails me a random joke every 24 hours on a user-defined subscription basis!

## Description

#### The webpage
<img width="861" alt="Screen Shot 2022-09-03 at 11 53 50 AM" src="https://user-images.githubusercontent.com/103232379/188282303-a1cd9c97-9fd2-41fe-97c2-c27b501333e5.png">
Joke-in-a-tor is a web application that sends me an email with a random joke once a day, the "Joke subscription". The user is able to customize the amount of days they would like to subscribe to the subscription. 

##### Samples:
To demonstrate the functionality of the joke generation, there is a button labeled "Generate Sample Joke", that when pressed, displays a random joke, fetched using the joke API. To demonstrate the emailing functionality, there is a button labeled "Email me a joke now", that when pressed, emails me the joke in the format of the those sent through the joke subscription:

<img width="1136" alt="Screen Shot 2022-09-03 at 11 42 23 AM" src="https://user-images.githubusercontent.com/103232379/188282168-4b9dd79a-7fff-4451-86b9-bcba55cf4c62.png">

#### What I used

To fetch random jokes, I used the icanhazdadjoke.com API. 
I used EmailJS to send emails.

#### Challenges and future plans

I initially had trouble displaying the jokes on the email since the response data would only return a promise. I was able to resolve the issue with a .then 
```
fetch('https://icanhazdadjoke.com/', options)
			.then((response) => response.json())
			.then ((data) => joke = data.joke)
			.then(() => sendEmail(joke))
```

A big limitation of my project is that the updated Google account privacy settings do not make it easy to send emails to Gmail accounts directly.
EmailJS API only allows me to send emails to addresses that have an EmailJS account. Thus, for now, the program sends emails to my address only and is for purely personal usage.
