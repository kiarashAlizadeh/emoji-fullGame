window.onload = function () {
  // Check if the user is logged in
  let isLoggedIn = localStorage.getItem('is-Login');
  if (isLoggedIn) {
    let userLogin = localStorage.getItem('user-Login');
    let storedData = localStorage.getItem('user-Data');

    if (storedData) {
      let userData = JSON.parse(storedData);
      let scoresTable = document.getElementById('scores-Table');

      userData.forEach((user) => {
        let row = scoresTable.insertRow(-1); // Insert a row at the end of the table
        let nameCell = row.insertCell(0); // Create a cell for the name
        let scoreCell = row.insertCell(1); // Create a cell for the score

        nameCell.textContent = user.name; // Set the name in the cell
        scoreCell.textContent = user.scores; // Set the score in the cell
      });

      // Check if the number of rows exceeds a certain threshold to hide the scroll
      if (userData.length <= 10) {
        let scoresContainer = document.querySelector('.scores-Container');
        scoresContainer.style.overflowY = 'hidden';
      }
    }
  } else {
    // Redirect to login page or handle user not logged in
    window.location.href = './login.html'; // Change this to your login page
  }
};
