let btn = document.querySelector('.user-SignUpBtn');

btn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the default form submission behavior

  let Name = document.querySelector('.user-Name').value;
  let phone = document.querySelector('.user-Phone').value;
  let Email = document.querySelector('.user-Email').value;
  let Address = document.querySelector('.user-Address').value;
  let Pass = document.querySelector('.user-Pass').value;
  let CPass = document.querySelector('.user-Cpass').value;

  if (
    Name === '' ||
    phone === '' ||
    Email === '' ||
    Address === '' ||
    Pass === '' ||
    CPass === ''
  ) {
    alert('you must fill the form before signup');
  } else if (Pass !== CPass) {
    alert('please check your pass');
  } else {
    let storedData = localStorage.getItem('user-Data');
    let userData = [];

    if (storedData) {
      userData = JSON.parse(storedData);
    }

    userData.push({
      name: Name,
      phone: phone,
      email: Email,
      address: Address,
      password: Pass,
      confirmPassword: CPass,
      scores: 0,
    });

    let jsonData = JSON.stringify(userData);
    localStorage.setItem('user-Data', jsonData);
    console.log(jsonData);
    alert('Successful registration and you are logged in');
    localStorage.setItem('is-Login', 'true');
    localStorage.setItem('user-Login', Name);
    window.location.href = './game.html';
  }
});

let storedData = localStorage.getItem('user-Data');

if (storedData) {
  let uData = JSON.parse(storedData);
  uData.forEach((user) => {
    let f = user.name;
    console.log(f);
  });
}
