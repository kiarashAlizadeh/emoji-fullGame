var isLogin = localStorage.getItem('is-Login');
let Clear = document.querySelector('.clear');

Clear.addEventListener('click', () => {
  if (isLogin === 'true') {
    // clear local storage btn
    localStorage.removeItem('user-Data');
    localStorage.removeItem('user-Login');
    localStorage.setItem('is-Login', 'false');
    alert('Local storage has been cleared And you Are logOut!');
    location.reload();
  } else {
    alert('Please LogIN before Clearing the local storage!');
  }
});
