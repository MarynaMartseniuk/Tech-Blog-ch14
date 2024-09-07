const login = async () => {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  };

  const changeToSignup = async () => {
    document.location.replace('/signup');
  };
  
  document.querySelector('#login-form').addEventListener('submit', login);
  document.querySelector('#change-to-signup').addEventListener('click', changeToSignup);