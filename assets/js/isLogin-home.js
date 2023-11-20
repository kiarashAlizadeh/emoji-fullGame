var loginLogoutButton = document.getElementById('signIn-SignUp');
var img = document.createElement('img');
img.src = './assets/images/user.svg';
img.alt = '';

loginLogoutButton.addEventListener('click', function (event) {
  var isLogin = localStorage.getItem('islogin');

  if (isLogin === 'true') {
    localStorage.setItem('islogin', 'false');
  }
});

var isLogin = localStorage.getItem('islogin');
var loginLogoutButton = document.getElementById('signIn-SignUp');

if (isLogin === 'true') {
  loginLogoutButton.textContent = 'Logout';
  loginLogoutButton.style.color = '#ff0000';
  loginLogoutButton.style.fontWeight = 'bold';
  loginLogoutButton.style.fontSize = '20px';
  loginLogoutButton.href = './assets/html/signIn.html';
} else {
  loginLogoutButton.textContent = 'Login';
  loginLogoutButton.href = './assets/html/signIn.html';
  loginLogoutButton.insertBefore(img, loginLogoutButton.firstChild);
}
