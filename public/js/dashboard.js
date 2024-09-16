//TODO if user is LogedIn and click on a Dashboard nav link, then  display a Dashboard with all posts that this user created
const displayAllPosts = async () => {

};

//TODO add event listener on "+ New Post" button
const openNewpostPage = async () => {
    document.location.replace('/newpost');
};

document.querySelector('.add-newpost').addEventListener('click', openNewpostPage);