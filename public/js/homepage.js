//TODO display all posts that were done by all users

const displayAllPosts = async () => {
  
    // const name = document.querySelector('#project-name').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    // const description = document.querySelector('#project-desc').value.trim();
  
    
    const response = await fetch(`/`, {
        method: 'GET',
        //headers: {'Content-Type': 'application/json',},
    });

    if (response.ok) {
        const postsData = await response.json();
        console.log(postsData);
    } else {
    alert('Failed to get posts');
    }
    
  };
  