// TODO if user pass uathentification then display a landing page - an empty Dashboard page
// TODO add event listener on "+ New Post" button
const openNewpostPage = async () => {
    document.location.replace('/newpost');
};

document.querySelector('.add-newpost').addEventListener('click', openNewpostPage);