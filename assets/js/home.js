let infoBtnS = document.querySelector('.info-BtnS');
let infoBtnLeft = document.querySelector('.info-Btn-Left');
var isLogin = localStorage.getItem('is-Login');

console.log(isLogin);
infoBtnS.addEventListener('click', () => {
  if (isLogin === 'true') {
    window.location.href = './assets/html/game.html';
  } else {
    alert('Please LogIn before start the Game!');
  }
});
infoBtnLeft.addEventListener('click', () => {
  window.location.href = './assets/html/signIn.html';
});
