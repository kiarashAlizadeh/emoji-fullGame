let signInBtn = document.getElementById('signIn-Btn');

signInBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let userEmail = document.getElementById('email').value;
  let userPass = document.getElementById('password').value;

  let storedData = localStorage.getItem('user-Data');

  if (storedData) {
    let userData = JSON.parse(storedData);
    let userExists = userData.find(
      (user) => user.email === userEmail && user.password === userPass
    );

    if (userEmail === '' || userPass === '') {
      alert('Please enter your email and password');
    } else if (userExists) {
      let userLogin = userExists.name;
      localStorage.setItem('user-Login', userLogin);

      localStorage.setItem('is-Login', 'true');
      alert('You are logged in!');
      window.location.href = './game.html';
    } else {
      alert('Your email or password is incorrect!');
    }
  } else {
    alert('There is no user in storage');
  }
});
