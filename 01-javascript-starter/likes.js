// Get the article container
const article = document.querySelector(`article.post`);
// Set a post ID for the voting
const postID = 10;

// Markup for the like button
const buttonMarkup = `
  <div  id="jsforwp-like">
    <button class="secondary">
      Like ♡
      <span class="count"></span>
    </button>
  </div>`;

// Add the button at the top of the article container
article.insertAdjacentHTML(`afterbegin`, buttonMarkup);

// Select the button from the page
const button = document.querySelector(`#jsforwp-like button`);

// Get the latest number of votes
updateLikeCount();

// Add an event listener to the button on click
button.addEventListener(`click`, vote);

// Sends a vote via the WP REST API
async function vote() {
  // Check if has already voted
  if (!hasVoted()) {
    // Make HTTP Request to REST API
    fetch(`http://js-for-wp.local/wp-json/likes/v1/${postID}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((votes) => {
        // Update the like count
        updateLikeCount();
        // Update local storage
        localStorage.setItem(
          `jsforwp_likes`,
          JSON.stringify([...getVotedFor(), postID])
        );
      });
  }
}

// Get the number of likes
async function updateLikeCount() {
  // Wait for the request to check number of votes
  button.querySelector(`.count`).innerHTML = await getVotes();
}

// Get the number of votes for a post
function getVotes() {
  return fetch(
    `http://js-for-wp.local/wp-json/likes/v1/${postID}`
  ).then((response) => response.json());
}

// Get posts user has liked
function getVotedFor() {
  // Check the value from local storage
  // If no value, set to an empty array
  return JSON.parse(localStorage.getItem(`jsforwp_likes`)) || [];
}

// Check if the user has voted for current post
function hasVoted() {
  const votedFor = getVotedFor();
  const hasVoted = votedFor.includes(postID);
  return hasVoted;
}
