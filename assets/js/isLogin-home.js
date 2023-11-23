var loginLogoutButton = document.getElementById('signIn-SignUp');
var userNameButton = document.getElementById('userName-Login');
var gameDisplayNav = document.getElementById('game-Display');
var isLogin = localStorage.getItem('is-Login');
var whoisLogin = localStorage.getItem('user-Login');
var img = document.createElement('img');
img.src = './assets/images/user.svg';
img.alt = '';

loginLogoutButton.addEventListener('click', function (event) {
  var isLogin = localStorage.getItem('is-Login');

  if (isLogin === 'true') {
    localStorage.setItem('is-Login', 'false');
    localStorage.setItem('user-Login', '');
  }
});

if (isLogin === 'true') {
  loginLogoutButton.textContent = 'Logout';
  loginLogoutButton.style.color = '#ff0000';
  loginLogoutButton.style.fontWeight = 'bold';
  loginLogoutButton.style.fontSize = '20px';
  loginLogoutButton.href = './assets/html/signIn.html';
  userNameButton.textContent = `Hi ${whoisLogin}`;
  userNameButton.style.color = '#58e256';
  userNameButton.style.fontSize = '20px';
  userNameButton.style.fontWeight = 'bold';
  gameDisplayNav.style.display = 'inline';
} else {
  loginLogoutButton.textContent = 'Login';
  loginLogoutButton.href = './assets/html/signIn.html';
  loginLogoutButton.insertBefore(img, loginLogoutButton.firstChild);
}
