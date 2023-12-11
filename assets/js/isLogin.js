var loginLogoutButton = document.getElementById('signIn-SignUp');
var userNameButton = document.getElementById('userName-Login');
var gameDisplayNav = document.getElementById('game-Display');
var isLogin = localStorage.getItem('is-Login');
var whoisLogin = localStorage.getItem('user-Login');
var img = document.createElement('img');
var imgHome = document.createElement('img');
var currentPath = window.location.pathname;

img.src = '../images/user.svg';
imgHome.src = './assets/images/user.svg';

loginLogoutButton.addEventListener('click', function (event) {
  var isLogin = localStorage.getItem('is-Login');

  if (isLogin === 'true') {
    // Logout the user by updating local storage
    localStorage.setItem('is-Login', 'false');
    localStorage.setItem('user-Login', '');
  }
});

// Check if a user is logged in
if (isLogin === 'true') {
  // Update the login/logout button for a logged-in user
  loginLogoutButton.textContent = 'Logout';
  loginLogoutButton.style.color = '#ff0000';
  loginLogoutButton.style.fontWeight = 'bold';
  loginLogoutButton.style.fontSize = '20px';

  // Set the appropriate href based on the current page
  if (currentPath.endsWith('index.html')) {
    loginLogoutButton.href = './assets/html/signIn.html';
  } else {
    loginLogoutButton.href = './signIn.html';
  }

  // Display the user's name
  userNameButton.textContent = `Hi ${whoisLogin}`;
  userNameButton.style.color = '#58e256';
  userNameButton.style.fontSize = '20px';
  userNameButton.style.fontWeight = 'bold';

  // Display the game navigation
  gameDisplayNav.style.display = 'inline';
} else {
  // Update the login/logout button for a logged-out user
  loginLogoutButton.textContent = 'Login';

  // Set the appropriate image and href based on the current page
  if (currentPath.endsWith('index.html')) {
    loginLogoutButton.insertBefore(imgHome, loginLogoutButton.childNodes[0]);
    loginLogoutButton.href = './assets/html/signIn.html';
  } else {
    loginLogoutButton.insertBefore(img, loginLogoutButton.childNodes[0]);
    loginLogoutButton.href = './signIn.html';
  }
}
