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

for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffEmojis[i];

  box.onclick = function () {
    this.classList.add('boxOpen');
    setTimeout(function () {
      if (document.querySelectorAll('.boxOpen').length > 1) {
        if (
          document.querySelectorAll('.boxOpen')[0].innerHTML ==
          document.querySelectorAll('.boxOpen')[1].innerHTML
        ) {
          document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
          document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

          if (document.querySelectorAll('.boxMatch').length == emojis.length) {
            alert('You have won the game!😍');
          }
        } else {
          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
        }
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

function startTimer(timer) {
  let remainTime = timer;
  updateTimerDisplay(remainTime);
//counter
  const timerInterval = setInterval(function() {
    remainTime--;
    updateTimerDisplay(remainTime);
    if (remainTime <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay(0);
      alert("Time Up!");
    }
  }, 1000); 
}
function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  document.querySelector('.game-timer').innerText = formattedTime;
}

function startGame() {
  const userResponse = confirm("Ready to play?");

  if (userResponse) {
    startTimer(90);
  } else {
    alert("Zzz");
  }
}

startGame();
