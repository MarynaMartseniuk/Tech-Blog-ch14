//TODO make user's posts clickable
// source of code: UofU bootcamp, module 04, activity 19

let postID;

const myPosts_container = document.querySelector('#myPosts_container');
const addNewPostBtn = document.querySelector('.add-newpost')

const openMyPostPage = async (event) => {

    // Listen for any clicks within the img-container div
    //myPosts_container.addEventListener('click', function (event) {
    const element = event.target;

    // TODO: get from the 'element = event.target;' a Post ID 'postID = ???'.
    // 'element = event.target;' => get the post by title value of this element  from db Post table => get post info with a post ID => rander this post on post.handlebars ??? 
    // for now let's use postID = 5;
    postID = 5; // posts.id;
    document.location.replace(`/api/posts/${postID}`);
 };

//TODO add event listener on "+ New Post" button
const openNewPostPage = async () => {
    document.location.replace('/newpost');
};

myPosts_container.addEventListener('click', openMyPostPage);
addNewPostBtn.addEventListener('click', openNewPostPage);