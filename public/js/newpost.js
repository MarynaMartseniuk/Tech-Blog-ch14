const addNewPostFunction = async (event) => {
    event.preventDefault();
    console.log('AddNewPost btn clikced!!!!!!!!!')
    const newTitleInput = document.querySelector('#newPost-title');
    const newContentInput = document.querySelector('#newPost-content');
  
    console.log(newTitleInput.value);
    console.log(newContentInput.value);
  
  // TODO: get "user_id: req.session.user_id," for "let newPOST = {}"

    if (newTitleInput&&newContentInput) {
  
      let newPOST = {
        title: newTitleInput.value.trim(),
        content: newContentInput.value.trim(),
      };
      console.log(newPOST);
      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify(newPOST),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      };
    };
  };
   
  document.querySelector('#newPost_form').addEventListener('submit', addNewPostFunction);
