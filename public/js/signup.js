const signup = async (event) => {
  event.preventDefault();
  console.log('signup clikced!!!!!!!!!')
  const usernameInput = document.querySelector('#user-name-signup');
  const passwordInput = document.querySelector('#password-signup');

  console.log(usernameInput.value);
  console.log(passwordInput.value);


  if (usernameInput.value&&passwordInput.value) {

    let loginInput = {
      username: usernameInput.value.trim(),
      password: passwordInput.value.trim()
    };
    console.log(loginInput);
    const response = await fetch('/api/users/signup', {
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

const changeToLogin = async () => {
  document.location.replace('/login');
};
  
document.querySelector('#signup-form').addEventListener('submit', signup);
document.querySelector('#change-to-login').addEventListener('click', changeToLogin);