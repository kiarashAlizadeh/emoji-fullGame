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

var shuffEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
var gameActive = true;
var matchesFound = 0; // Track the number of matches found

for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffEmojis[i];

  box.onclick = function () {
    if (!gameActive) return;

    this.classList.add('boxOpen');
    setTimeout(() => {
      const openBoxes = document.querySelectorAll('.boxOpen');
      if (openBoxes.length > 1) {
        const [firstBox, secondBox] = openBoxes;

        if (firstBox.innerHTML == secondBox.innerHTML) {
          firstBox.classList.add('boxMatch');
          secondBox.classList.add('boxMatch');
          matchesFound += 2;

          firstBox.classList.remove('boxOpen');
          secondBox.classList.remove('boxOpen');

          if (matchesFound == emojis.length) {
            gameActive = false;
            alert('You have won the game!😍');
          }
        } else {
          secondBox.classList.remove('boxOpen');
          firstBox.classList.remove('boxOpen');
        }
      }

      if (matchesFound < emojis.length && gameActive) {
        checkTimer(); // Check if the timer should be stopped
      }
    }, 700);
  };

  document.querySelector('.game').appendChild(box);
}

setTimeout(function () {
  var boxes = document.querySelectorAll('.item');
  boxes.forEach(function (box) {
    box.classList.add('boxOpen');
  });

  setTimeout(function () {
    boxes.forEach(function (box) {
      box.classList.remove('boxOpen');
    });
  }, 2000);
}, 500);

/////////////////////////

var timerInterval; // Declare timerInterval globally

function startTimer(timer) {
  let remainTime = timer;
  updateTimerDisplay(remainTime);

  timerInterval = setInterval(function () {
    remainTime--;
    updateTimerDisplay(remainTime);

    if (remainTime <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay(0);
      gameActive = false;
      alert('Time Up!');
    }

    checkTimer(); // Check if the timer should be stopped on each interval
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  document.querySelector('.game-timer').innerText = formattedTime;
}

function startGame() {
  const userResponse = confirm('Ready to play?');

  if (userResponse) {
    startTimer(5);
  } else {
    alert('Ok Bye');
  }
}

function checkTimer() {
  if (matchesFound == emojis.length) {
    clearInterval(timerInterval);
  }
}

startGame();
