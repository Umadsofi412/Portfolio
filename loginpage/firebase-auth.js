// firebase-auth.js

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the authentication service
var auth = firebase.auth();

// Add event listener for form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get values from input fields
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Sign in user with email and password
    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // Signed in successfully, redirect to index.html
        window.location.href = "index.html";
      })
      .catch(function (error) {
        // Handle errors here
        var errorMessage = error.message;
        alert(errorMessage);
      });
  });
