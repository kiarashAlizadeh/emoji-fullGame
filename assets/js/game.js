// Define an array of emojis
const emojis = [
  '😍',
  '😍',
  '😁',
  '😁',
  '😶',
  '😶',
  '🙄',
  '🙄',
  '😊',
  '😊',
  '😂',
  '😂',
  '🤪',
  '🤪',
  '😎',
  '😎',
];

// Shuffle the emojis array using the Fisher-Yates algorithm
var shuffEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Initialize game-related variables
var gameActive = true; // Flag to track whether the game is still active
var matchesFound = 0; // Track the number of matches found

// Retrieve user login information from local storage
const userLogin = localStorage.getItem('user-Login'); 
const users = JSON.parse(localStorage.getItem('user-Data')); // Import user information
const player = users.find((user) => user.name === userLogin); // Find the logged-in user

// Create the game board dynamically
for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffEmojis[i];

  // Add click event listener to each box
  box.onclick = function () {
    if (!gameActive) return;

    this.classList.add('box-Open');
    setTimeout(() => {
      const openBoxes = document.querySelectorAll('.box-Open');
      if (openBoxes.length > 1) {
        const [firstBox, secondBox] = openBoxes;

        // Check if the selected emojis match
        if (firstBox.innerHTML == secondBox.innerHTML) {
          // Mark the matching boxes and update matchesFound
          firstBox.classList.add('box-Match');
          secondBox.classList.add('box-Match');
          matchesFound += 2;

          // Remove the 'box-Open' class from matched boxes
          firstBox.classList.remove('box-Open');
          secondBox.classList.remove('box-Open');

          // Check if all matches have been found to end the game
          if (matchesFound == emojis.length) {
            gameActive = false;
            alert('You have won the game!😍');
          }

          // Update user scores if a player is logged in
          if (player) {
            // scorePlayer = Number(player.scores);
            // scorePlayer += 1; // Increment the user's score
            // Update user information in local storage
          }
        } else {
          // If the selected emojis do not match, close the boxes
          secondBox.classList.remove('box-Open');
          firstBox.classList.remove('box-Open');
        }
      }

      // If the game is still active, check if the timer should be stopped
      if (matchesFound < emojis.length && gameActive) {
        checkTimer();
      }
    }, 700);
  };

  // Append the box to the game container
  document.querySelector('.game').appendChild(box);
}

// Set up an initial animation to reveal and then hide the emojis
setTimeout(function () {
  var boxes = document.querySelectorAll('.item');
  boxes.forEach(function (box) {
    box.classList.add('box-Open');
  });

  setTimeout(function () {
    boxes.forEach(function (box) {
      box.classList.remove('box-Open');
    });
  }, 2000);
}, 500);

/////////////////////////

// Declare a global variable for the timer interval
var timerInterval;

// Function to start the game timer
function startTimer(timer) {
  let remainTime = timer;
  updateTimerDisplay(remainTime);

  // Update the timer display every second
  timerInterval = setInterval(function () {
    remainTime--;
    updateTimerDisplay(remainTime);

    // End the game if the timer reaches zero
    if (remainTime <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay(0);
      gameActive = false;
      alert('Time is Up!');
    }

    // Check if the timer should be stopped on each interval
    checkTimer();
  }, 1000);
}

// Variable to store the player's score
let playerScore;

// Function to update the timer display
function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  
  // Update the timer display in the HTML
  document.querySelector('.game-Timer').innerText = formattedTime;

  // Update the player's score if the game has ended
  if (gameActive === false) {
    playerScore = seconds;
    player.scores = playerScore;
    localStorage.setItem('user-Data', JSON.stringify(users));
  }
}
// Function to start the game and prompt the user
function startGame() {
  const userResponse = confirm('Ready to play?');

  if (userResponse) {
    startTimer(60); // Start the game timer with a duration of 60 seconds
  } else {
    alert('Ok Bye');
  }
}
// Function to check if the timer should be stopped
function checkTimer() {
  if (matchesFound == emojis.length) {
    clearInterval(timerInterval);
  }
}
// Start the game when the script is executed
startGame();
