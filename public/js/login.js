const usernameInput = document.querySelector("#user-name-login");
const passwordInput = document.querySelector("#password-login");


const login = async () => {
    if (usernameInput.value&&passwordInput.value) {

      

      let loginInput = {
                        username: usernameInput.value,
                        password: passwordInput.value
                        };
      
    

      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: loginInput
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