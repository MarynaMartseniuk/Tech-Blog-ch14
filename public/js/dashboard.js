//TODO make user's posts clickable
// source of code: UofU bootcamp, module 04, activity 19

let postID;

const myPosts_container = document.querySelector('#myPosts_container');
const addNewPostBtn = document.querySelector('.add-newpost')



//TODO add event listener on "+ New Post" button
const openNewPostPage = async () => {
    document.location.replace('/newpost');
};

myPosts_container.addEventListener('click', openMyPostPage);
addNewPostBtn.addEventListener('click', openNewPostPage);