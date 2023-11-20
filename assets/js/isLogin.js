var loginLogoutButton = document.getElementById('signIn-SignUp');
var img = document.createElement('img');
img.src = '../images/user.svg';
img.alt = '';

loginLogoutButton.addEventListener('click', function (event) {
  var isLogin = localStorage.getItem('islogin');

  if (isLogin === 'true') {
    localStorage.setItem('islogin', 'false');
    localStorage.setItem('userLogin', '');
  }
});

var isLogin = localStorage.getItem('islogin');
var loginLogoutButton = document.getElementById('signIn-SignUp');

if (isLogin === 'true') {
  loginLogoutButton.textContent = 'Logout';
  loginLogoutButton.style.color = '#ff0000';
  loginLogoutButton.style.fontWeight = 'bold';
  loginLogoutButton.style.fontSize = '20px';
  loginLogoutButton.href = './signIn.html';
} else {
  loginLogoutButton.textContent = 'Login';
  loginLogoutButton.insertBefore(img, loginLogoutButton.childNodes[0]);

  loginLogoutButton.href = './signIn.html';
}
