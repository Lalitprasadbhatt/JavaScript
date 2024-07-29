let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
   const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
   msg.innerText = "game was Draw. play again.";
   msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
   if (userWin) {
       userScore++;
      userScorepara.innerText = userScore;
       msg.innerText = `you  win! your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor ="green";
   } else {
       compScore++;
       compScorepara.innerText = compScore;
       msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
       msg.style.backgorundColor = "red";
   }
};
const playGame = (userChoice) => {
    
   //generate computer choice
   const compChoice = genCompChoice();
   console.log("Comp choice =", compChoice);

   if (userChoice === compChoice) {
       drawGame(); 
   } else {
       let userWin = true;
       if (userChoice === "rock") {
           //scissors,paper
           userWin = compChoice ==="paper"? false : true;

       }else if(userChoice === "paper"){
           //rock ,scissors
           userWin = compChoice == "scissors" ? false : true;

       } else {
           //rock, paper
           userWin = compChoice === "rock" ? false : true;
       }
       showWinner(userWin ,userChoice,compChoice);
   }
};
choices.forEach((choice) =>{
   choice.addEventListener("click", () =>{
const userChoice = choice.getAttribute("id");

       playGame(userChoice);
   });
});