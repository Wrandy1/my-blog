const user = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');


function savePost() {

  const userPost = {
    user: user.value,
    title: title.value,
    content: content.value.trim(),
  };
  localStorage.setItem('userpost', JSON.stringify(userPost));
}

function renderPost() {
  // Use JSON.parse() to convert text to JavaScript object
  const newPost = JSON.parse(localStorage.getItem('userpost'));
  // Check if data is returned, if not exit out of the function
  if (newPost !== null) {
    document.getElementById('saved-user').innerHTML = newPost.user;
    document.getElementById('saved-title').innerHTML = newPost.title;
    document.getElementById('saved-content').innerHTML = newPost.content;
  }
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  savePost();
  renderPost();
});