// Get the reference to the sign-up button
let btn = document.querySelector('.user-SignUpBtn');

// Attach a click event listener to the sign-up button
btn.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the user input values from the form fields
  let Name = document.querySelector('.user-Name').value;
  let phone = document.querySelector('.user-Phone').value;
  let Email = document.querySelector('.user-Email').value;
  let Address = document.querySelector('.user-Address').value;
  let Pass = document.querySelector('.user-Pass').value;
  let CPass = document.querySelector('.user-Cpass').value;
  // Check if any of the form fields are empty
  if (
    Name === '' ||
    phone === '' ||
    Email === '' ||
    Address === '' ||
    Pass === '' ||
    CPass === ''
  ) {
    alert('You must fill out the entire form before signing up');
  } else if (Pass !== CPass) {
    // Check if the password and confirm password match
    alert('Please check your password');
  } else {
    // Retrieve existing user data from local storage or initialize an empty array
    let storedData = localStorage.getItem('user-Data');
    let userData = [];

    if (storedData) {
      userData = JSON.parse(storedData);
    }

    // Add the new user data to the array
    userData.push({
      name: Name,
      phone: phone,
      email: Email,
      address: Address,
      password: Pass,
      confirmPassword: CPass,
      scores: 0,
    });

    // Convert the user data array to JSON and store it in local storage
    let jsonData = JSON.stringify(userData);
    localStorage.setItem('user-Data', jsonData);

    // Display a success message and set login status
    alert('Successful registration, and you are now logged in');
    localStorage.setItem('is-Login', 'true');
    localStorage.setItem('user-Login', Name);

    // Redirect to the game page
    window.location.href = './game.html';
  }
});
