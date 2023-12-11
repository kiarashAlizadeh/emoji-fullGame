// Get the reference to the sign-in button
let signInBtn = document.getElementById('signIn-Btn');

// Attach a click event listener to the sign-in button
signInBtn.addEventListener('click', function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the user email and password from the input fields
  let userEmail = document.getElementById('email').value;
  let userPass = document.getElementById('password').value;

  // Retrieve stored user data from local storage
  let storedData = localStorage.getItem('user-Data');

  // Check if user data is available in local storage
  if (storedData) {
    // Parse the stored data into a JavaScript object
    let userData = JSON.parse(storedData);

    // Find the user with matching email and password
    let userExists = userData.find(
      (user) => user.email === userEmail && user.password === userPass
    );
    // Check if email or password is empty
    if (userEmail === '' || userPass === '') {
      alert('Please enter your email and password');
    } else if (userExists) {
      // If the user is found, set the user login information
      let userLogin = userExists.name;
      localStorage.setItem('user-Login', userLogin);

      // Set a flag indicating that the user is logged in
      localStorage.setItem('is-Login', 'true');

      // Display a success message and redirect to the game page
      alert('You are logged in!');
      window.location.href = './game.html';
    } else {
      // Display an error message for incorrect email or password
      alert('Your email or password is incorrect!');
    }
  } else {
    // Display a message if there is no user data in storage
    alert('There is no user in storage');
  }
});
