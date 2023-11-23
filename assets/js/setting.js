var isLogin = localStorage.getItem('islogin');
let Clear = document.querySelector('.clear');

Clear.addEventListener('click', () => {
  if (isLogin === 'true') {
    // clear local storage btn
    localStorage.removeItem('userData');
    localStorage.removeItem('userLogin');
    localStorage.setItem('islogin', 'false');
    alert('Local storage has been cleared And you Are logOut!');
    location.reload();
  } else {
    alert('Please LogIN before Clearing the local storage!');
  }
});
