let signInBtn = document.getElementById('signIn-btn');

signInBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let userEmail = document.getElementById('email').value;
  let userPass = document.getElementById('password').value;

  let storedData = localStorage.getItem('userData');

  if (storedData) {
    let userData = JSON.parse(storedData);
    let storedEmail = userData[0].email;
    let storedPassword = userData[0].password;
    if (userEmail === '' || userPass === '') {
      alert('Please enter your email and password');
    } else if (userEmail === storedEmail && userPass === storedPassword) {
      localStorage.setItem('islogin', 'true');
      alert('you are loged in');
      window.location.href = './game.html';
    } else {
      alert('your email or your password is incorrect!');
    }
  } else {
    alert('there is no user in storage');
  }
});
