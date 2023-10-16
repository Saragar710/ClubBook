const btnSignUp = document.getElementById("btnSignUp");
const btnLogin = document.getElementById("btnLogin");

const acctUserName = document.getElementById("acctUserName");
const acctUserPassword = document.getElementById("acctUserPassword");
const loginUserName = document.getElementById("loginUserName");
const loginUserPassword = document.getElementById("loginUserPassword");

const loginFormHandler = async (event) => {
    event.preventDefault();
  //defining username (email) and password from the login html

    // Collect values from the login form
    const userName = document.querySelector('#userName-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
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
        document.location.replace('/club');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ userNamename, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/club');
      } else {
        alert(response.statusText);
      }
    }
  };

  btnLogin.addEventListener("click",() => console.log(`You are now login with your account`))
  btnSignUp.addEventListener("click",() => console.log(`Your account is now created..`))
  
  // document
  //   .querySelector('.login-form')
  //   .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('.signup-form')
  //   .addEventListener('submit', signupFormHandler);

  //   document.querySelector('#login').addEventListener('click', login);