let rightAnswers = 0;
const aboutMeQuiz =function gameQuestions ()
{
    let userName = prompt("Hi, what's your name?");
    alert("Welcome to my page " + userName + "!");
    alert(userName + " I'm going to ask you a series of questions!");
    alert("You can only answer yes or no!");
    
    let nameQuestion = prompt("Is my first name Miqelle?");
    let answer = ("yes");
    
    if ( nameQuestion === 'y' || nameQuestion === 'yes' ) 
    {
        alert("Good job that's correct 😊");
        rightAnswers++
    }
    else
    {
        alert("Try again");
    }
    
    let wrkQuestion = prompt("Have I worked in Customer Service?");
    let knowAnswer = "yes";
    if ( wrkQuestion === 'y' || wrkQuestion ==='yes')
    {
        alert("Correct, I sure did!");
        rightAnswers++;
    }
    else
    {
        alert("Try again!");
    }
    
    let likeQuestion = prompt("Do I like the color yellow?");
    let likeAnswer = "yes";
    if (likeQuestion === 'y' || likeQuestion === 'yes') 
    {
        alert("Correct, I think yellow is 🔥 ");
        rightAnswers++;
    }
    else
    {
        alert("Take a look around, the answer is right in front of you!");
    }
    
    let anotherQuestion = prompt("Do I want to be an experienced App Developer?");
    let anotherAnswer = "yes";
    if ( anotherQuestion === 'y' || anotherQuestion ==='yes')
    {
        alert("YES, I really do!");
        rightAnswers++;
    }
    else
    {
        alert("Try again!");
    }
    
    let visQuestion = prompt("Do I like Visual Studio Code?");
    let visAnswer = "yes";
    if ( visQuestion === 'y' ||  visQuestion === 'yes')
    {
        alert("Bingo! That's right");
        rightAnswers++;
    }
    else
    {
        alert("Guess again!");
    }
    alert("Feel free to explore the page " + userName + " 😊" + "!");

    //give the user four try's
for (let tries = 1; tries < 5; tries++)
{
    let userAnswer = prompt("Guess a number between 1 and 5")//take in a numeric input by prompting the user to guess a number
    if(userAnswer > 4)
    {
        alert("That's too high!");//Use alert if userAnswer is too high 
    }
    if(userAnswer < 4)//use alert if userAnser is too low
    {
        alert("That's too low!");
    }
}
alert("The answer is 4!");//after all try's used alert("The answer is 4");


let userAnswer = prompt("What city would I like to visit?");
//create an array
let citiesToVisit = ['New Orleans', 'St. Louis', 'San Diego', 'San Francisco'];

{

if ( userAnswer === citiesToVisit[0])
{
    alert("That's the number one city I want to visit! 😊");
    rightAnswers++;
}
else {
    for ( i = 0; i < 5; i++)//this for loop asks the user the question 6 times, and then tells them all possible answer
    {
        prompt("What's the number one city I want to visit?");
        console.log(prompt);
    }
    alert(`All possible answers: New Orleans, St. Louis, San Diego, San Francisco  You got  ${rightAnswers}  right answers out of 7 😊! `);
}
}
} 
let button = document.querySelector('button');
button.addEventListener('click', aboutMeQuiz);


gameQuestions();

