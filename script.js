// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Function to handle user's choice
function handleUserChoice(index) {
  // Add "active" class to the selected option image
  optionImages.forEach((image, idx) => {
    image.classList.remove("active");
    if (idx === index) {
      image.classList.add("active");
    }
  });

  // Set user and CPU images to default "rock" image
  userResult.src = cpuResult.src = "https://codingstella.com/wp-content/uploads/2024/01/download.png";
  result.textContent = "Wait...";

  // Start the game after a delay
  gameContainer.classList.add("start");
  setTimeout(() => {
    gameContainer.classList.remove("start");

    // Get user's and CPU's choices (0: Rock, 1: Paper, 2: Scissors)
    const userChoice = index;
    const cpuChoice = Math.floor(Math.random() * 3); // Random number between 0 and 2
// Update user's and CPU's images based on their choices
userResult.src = `https://codingstella.com/wp-content/uploads/2024/01/download${userChoice === 0 ? '' : (userChoice > 0 ? `-${userChoice}` : userChoice)}.png`;
cpuResult.src = `https://codingstella.com/wp-content/uploads/2024/01/download${cpuChoice === 0 ? '' : (cpuChoice > 0 ? `-${cpuChoice}` : cpuChoice)}.png`;


    // Determine the game result
    const resultMatrix = [
      ["Draw", "Opponent", "You"], // Result for userChoice = 0 (Rock)
      ["You", "Draw", "Opponent"], // Result for userChoice = 1 (Paper)
      ["Opponent", "You", "Draw"]  // Result for userChoice = 2 (Scissors)
    ];
    const outcome = resultMatrix[userChoice][cpuChoice];

    // Display the result based on outcome
    if (outcome === "Draw") {
      result.textContent = "Match Draw";
    } else if (outcome === "Opponent") {
      result.textContent = "Opponent Won!!";
    } else if (outcome === "You") {
      result.textContent = "You Won!!";
    }
  }, 2000);
}

// Add click event listeners to option images
optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    handleUserChoice(index);
  });

});


