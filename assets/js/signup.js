let Clear = document.querySelector('.clear');
let btn = document.querySelector('.user-signUpBtn');
btn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the default form submission behavior

  let Name = document.querySelector('.user-name').value;
  let phone = document.querySelector('.user-phone').value;
  let Email = document.querySelector('.user-email').value;
  let Address = document.querySelector('.user-address').value;
  let Pass = document.querySelector('.user-pass').value;
  let Cpass = document.querySelector('.user-cPass').value;
  let userData = [];
  userData.push({
    name: Name,
    phone: phone,
    email: Email,
    address: Address,
    password: Pass,
    confirmPassword: Cpass,
  });

  let jsonData = JSON.stringify(userData);

  localStorage.setItem('userData', jsonData);
  console.log(jsonData);
});

let StoredData = localStorage.getItem('userData');

if (StoredData) {
  let uData = JSON.parse(StoredData);
  let f = uData[0].name;
  console.log(f);
}
// const resetStorage = () => {

// };

Clear.addEventListener('click', () => {
  localStorage.removeItem('userData');
});
