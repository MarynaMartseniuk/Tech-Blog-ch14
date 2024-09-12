const login = async (event) => {
  event.preventDefault(event);
  console.log("=========START========");

  const usernameInput = document.querySelector('#user-name-login');
  const passwordInput = document.querySelector('#password-login');

  if (usernameInput.value&&passwordInput.value) {

    console.log("===========================");
    console.log(usernameInput.value);
    console.log(passwordInput.value);
    console.log("===========================");

    let loginInput = {
      username: usernameInput.value.trim(),
      password: passwordInput.value.trim()
    };

    console.log(loginInput);

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(loginInput),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    };
  };
};

const changeToSignup = async () => {
  document.location.replace('/signup');
};

document.querySelector('#login-form').addEventListener('submit', login);
document.querySelector('#change-to-signup').addEventListener('click', changeToSignup);