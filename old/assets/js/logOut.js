let logOutBtn = document.getElementById('logOutBtn');

logOutBtn.addEventListener('click', function (e) {
  e.preventDefault();

  localStorage.setItem('islogin', 'false');

  alert('You have been logged out.');

  window.location.href = '../Html/signin.html';
});
