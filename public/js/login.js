const { Sequelize } = require("sequelize");

const btnSignUp = document.getElementById("btnSignUp");
const btnLogin = document.getElementById("btnLogin");

const acctUserName = document.getElementById("acctUserName");
const acctUserPassword = document.getElementById("acctUserPassword");
const loginUserName = document.getElementById("loginUserName");
const loginUserPassword = document.getElementById("loginUserPassword");

const sequelize = Sequelize;

const loginFormHandler = async (event) => {
    event.preventDefault();
  //defining username (email) and password from the login html

    // Collect values from the login form
    userName = loginUserName.value;
    password = loginUserPassword.value;

    if (userName && password) {
      // Send POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  //if ok, go to file.html
      if (response.ok) {
        // When successful, redirect to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();

    userName = acctUserName.value;
    password = acctUserPassword.value;
  
    if (userName && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/club');
      } else {
        alert(response.statusText);
      }
    }
  };

  btnLogin.addEventListener("click",loginFormHandler)
  btnSignUp.addEventListener("click",signupFormHandler)
  
  // document
  //   .querySelector('.login-form')
  //   .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('.signup-form')
  //   .addEventListener('submit', signupFormHandler);

  //   document.querySelector('#login').addEventListener('click', login);