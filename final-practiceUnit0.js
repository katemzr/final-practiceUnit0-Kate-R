//I need to create a way to receive user input; I will add readline-sync to achieve this.
//Values, Data Types, and Operations: readline-sync
const userInput = require('readline-sync'); //This will allow the program to prompt users for information.

//I need to create arrays that contain the choices for meats, vegetables, difficulty levels, and time per recipe.
//Building Arrays: creating arrays using array literals
let meatChoices = ["Beef", "Chicken", "Pork"];//array of meat choices
let vegetableChoices = ["Carrots", "Spinach", "Peas"];//array of vegetable choices
let difficultyLevelChoices = ["Easy", "Expert"];//array of difficulty level choices
let timePerRecipeChoices = ["Fast", "Moderate"];//array of time per recipe choices
// console.log(meatChoices);
// console.log(vegetableChoices);
// console.log(difficultyLevelChoices);
// console.log(timePerRecipeChoices);

//I want to ask the user their name to personalize the app when asking for recipe preferrences and providing recipes. 
// I am including a newline character (\n) after the questions, so the user input is typed under the question (purely for aesthetics).
//String Characters Together & Values, Data Types, and Operations: An escape sequence and readline-sync.
let userName = userInput.question("What is your name?\n");//asks user for name and creates a line break.
// console.log(userName);

//Prompt the User for Difficulty Level
let userDifficultyLevel = userInput.question(`What level of recipe difficulty would you prefer? Please choose one: Easy or Expert \n`);//asks user to provide difficulty level and creates a line break.
// console.log(userDifficultyLevel);


//I need to validate the user's answers in order to provide them with recipes. 
//I'm using a while loop that continues to prompt the user until a valid answer is entered. 
//Once a valid answer is submitted, the program will move on to the next question prompt. 
// I will use a while loop with comparison/logical operators (!=) and (&&) to validate the user input for each question.
//Working with Loops & Control Structures & Logic: while loops, comparison operators, and logical operators.
while (userDifficultyLevel != "Easy" && userDifficultyLevel != "Expert") {
    // console.log(userDifficultyLevel);
    userDifficultyLevel = userInput.question(`Invalid response. What level of recipe difficulty would you prefer? Please choose one: Easy or Expert \n`);
} 

//Repeat promts for Time, Meat and Vegatable.
//Repeat user input validation.
let userTimePerRecipe = userInput.question(`How much time would you like to spend on making the recipe? Please choose one: Fast or Moderate \n`);
// console.log(userTimePerRecipe);

while (userTimePerRecipe != "Fast" && userTimePerRecipe != "Moderate") {
    // console.log(userTimePerRecipe);
    userTimePerRecipe = userInput.question(`Invalid response. How much time would you like to spend on making the recipe? Please choose one: Fast or Moderate \n`);
} 

let userMeat = userInput.question(`Please choose one meat: Beef, Chicken, Pork \n`);
// console.log(userMeat);

while (userMeat != "Beef" && userMeat != "Chicken" && userMeat != "Pork") {
    // console.log(userMeat);
    userMeat = userInput.question(`Invalid response. Please choose one meat: Beef, Chicken, Pork \n`);
} 

let userVegetable = userInput.question(`Please choose one vegetable: Carrots, Spinach, Peas \n`);
// console.log(userVegetable);

while (userVegetable != "Carrots" && userVegetable != "Spinach" && userVegetable != "Peas") {
    // console.log(userVegetable);
    userVegetable = userInput.question(`Invalid response. Please choose one vegetable: Carrots, Spinach, Peas \n`);
} 

//I want to communicate with the user about the list of recipes they will see and what parameters they follow, based on the user's input.
//Stringing Characters Together: this message uses template literals & string interpolation (to easily include variables & user input) 
// and string concatenation (to keep the string easy to read)
let recipeListMsg = `Hi, ${userName}! Let's find some ${userDifficultyLevel} recipes` + 
    ` that use ${userMeat} and ${userVegetable}. \n\n` + 
    `Here's a list of recipes that will take a ${userTimePerRecipe} amount of time to create. Viola!`; 

console.log(recipeListMsg);//the user would see this message and then a list of recipes that meet all the parameters would be displayed to the user.

//Eventually, I may want to add more ingredient options, difficulty levels, or times per recipe options. To add new elements and modify the arrays, I would need to use the .splice() method on the existing arrays.
//Below is 
//Using Arrays: .splice() method
meatChoices.splice(2, 0, "Fish");
console.log(meatChoices);//Outputs: [ 'Beef', 'Chicken', 'Fish', 'Pork' ]