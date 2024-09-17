const updateBtn = document.querySelector('#editPost_update');
const deleteBtn = document.querySelector('#editPost_delete');

//TODO: get the post ID (const postID=???)

// TODO: use fetch method to do a put request to Database Post Table by post ID.
// create a function:
// const updatePostText = function() {
    // save user input for post.title and post.content into const updatedPost

    // create fetch by PUT method with body=updatedPost to route '/api/posts/:id' to controllers/api/postRoutes.js

    //redirect user to '/dashbord' if res=ok so user can see updated list of his/here posts
// };

// TODO: use fetch method to do a delete request to Database Post Table by post ID.
// create a function:
// const deletePostText = function() {

    // create fetch by DELETE method to route '/api/posts/:id' to controllers/api/postRoutes.js

    //redirect user to '/dashbord' if res=ok so user can see updated list of his/here posts
// };

updateBtn.addEventListener('click', updatePostText);
deleteBtn.addEventListener('click', deletePostfromDB);