// Initialize scores
let userScore = 0;
let compScore = 0;

// Select all choices (rock, paper, scissors) and the message area
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Select the user and computer score elements
const userScorepara = document.querySelector("#user-Score");
const compScorepara = document.querySelector("#comp-Score");

// Function to generate computer's random choice
const genCompChoice = () => {
   const options = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() * options.length);
   return options[randIdx];
};

// Function to generate a random suggestion for the next move
const genNextSuggestion = () => {
   const suggestions = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() * suggestions.length);
   return suggestions[randIdx];
};

// Function to handle a draw situation
const drawGame = () => {
   msg.innerHTML = "🤝 It's a draw! Play again.";
   msg.style.backgroundColor = "#081b31";
};

// Function to show the result of the game and update scores
const showWinner = (userWin, userChoice, compChoice) => {
   if (userWin) {
       userScore++; // Increment user score if the user wins
       userScorepara.innerText = userScore; // Update the score on UI
       msg.innerHTML = `🎉 You win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
   } else {
       compScore++; // Increment computer score if user loses
       compScorepara.innerText = compScore; // Update the score on UI
       msg.innerHTML = `😢 You lost. ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor = "red";
   }
   const nextSuggestion = genNextSuggestion(); // Get the next move suggestion
   msg.innerHTML += `<br>🧐 Try picking <strong>${nextSuggestion}</strong> next time!`; // Display suggestion
};

// Function to play the game with user's choice
const playGame = (userChoice) => {
   // Generate computer's choice
   const compChoice = genCompChoice();

   // If the choices are the same, it's a draw
   if (userChoice === compChoice) {
       drawGame(); 
   } else {
       let userWin = true;

       // Check the outcome of the game based on user and computer choices
       if (userChoice === "rock") {
           userWin = compChoice === "scissors"; // Rock beats Scissors
       } else if (userChoice === "paper") {
           userWin = compChoice === "rock"; // Paper beats Rock
       } else if (userChoice === "scissors") {
           userWin = compChoice === "paper"; // Scissors beats Paper
       }

       // Show the winner result
       showWinner(userWin, userChoice, compChoice);
   }
};

// Add event listeners to each choice (rock, paper, scissors) to handle user's click
choices.forEach((choice) => {
   choice.addEventListener("click", () => {
       const userChoice = choice.getAttribute("id"); // Get the user's choice
       playGame(userChoice); // Play the game with the selected choice

       // Add visual feedback for selected choice
       choices.forEach(c => c.classList.remove('selected'));
       choice.classList.add('selected');
   });
});
