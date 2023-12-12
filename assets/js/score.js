window.onload = function () {
  // Check if the user is logged in
  let isLoggedIn = localStorage.getItem('is-Login');

  if (isLoggedIn === 'true') {
    // Retrieve user data from local storage
    let storedData = localStorage.getItem('user-Data');

    if (storedData) {
      // Parse user data into a JavaScript object
      let userData = JSON.parse(storedData);

      // Sort user data by scores in descending order
      userData.sort((a, b) => b.scores - a.scores);
      // Get a reference to the scores table in the HTML
      let scoresTable = document.getElementById('scores-Table');

      // Iterate over the sorted user data to populate the table
      userData.forEach((user, index) => {
        // Insert a row at the end of the table
        let row = scoresTable.insertRow(-1);

        // Create cells for rank, name, and score
        let rankCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let scoreCell = row.insertCell(2);

        // Set the rank, name, and score in their respective cells
        rankCell.textContent = index + 1;
        nameCell.textContent = user.name;
        scoreCell.textContent = user.scores;
      });

      // Check if the number of rows exceeds a certain threshold to hide the scroll
      if (userData.length <= 10) {
        let scoresContainer = document.querySelector('.scores-Container');
        scoresContainer.style.overflowY = 'hidden';
      }
    }
  } else {
    // Redirect to the login page if the user is not logged in
    alert("please Login first") // Change this to your login page
    window.location.href = './signin.html';
  }
};
