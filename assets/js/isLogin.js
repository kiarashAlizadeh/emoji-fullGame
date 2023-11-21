var loginLogoutButton = document.getElementById('signIn-SignUp');
var userNameButton = document.getElementById('userName-login');
var isLogin = localStorage.getItem('islogin');
var whoIsLogin = localStorage.getItem('userLogin');
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

if (isLogin === 'true') {
  loginLogoutButton.textContent = 'Logout';
  loginLogoutButton.style.color = '#ff0000';
  loginLogoutButton.style.fontWeight = 'bold';
  loginLogoutButton.style.fontSize = '20px';
  loginLogoutButton.href = './signIn.html';
  userNameButton.textContent = `Hi ${whoIsLogin}`;
  userNameButton.style.color = '#58e256';
  userNameButton.style.fontSize = '20px';
  userNameButton.style.fontWeight = 'bold';
} else {
  loginLogoutButton.textContent = 'Login';
  loginLogoutButton.insertBefore(img, loginLogoutButton.childNodes[0]);

  loginLogoutButton.href = './signIn.html';
}
