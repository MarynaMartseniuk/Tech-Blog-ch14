const signup = async () => {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  };

  const changeToLogin = async () => {
    document.location.replace('/login');
  };
  
  document.querySelector('#signup-form').addEventListener('submit', signup);
  document.querySelector('#change-to-login').addEventListener('click', changeToLogin);