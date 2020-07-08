// Setup a container to add our React to
const article = document.querySelector(`article.post`);
const buttonContainerMarkup = `<div  id="jsforwp-like"></div>`;
article.insertAdjacentHTML(`afterbegin`, buttonContainerMarkup);
const buttonContainer = document.querySelector(`#jsforwp-like`);

// Add the React to the post
wp.element.render(<button>Like ♡</button>, buttonContainer);
