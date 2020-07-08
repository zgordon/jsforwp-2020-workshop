const { useState } = wp.element;

// Setup a container to add our React to
const article = document.querySelector(`article.post`);
const buttonContainerMarkup = `<div  id="jsforwp-like"></div>`;
article.insertAdjacentHTML(`afterbegin`, buttonContainerMarkup);
const buttonContainer = document.querySelector(`#jsforwp-like`);

// Create a LikeButton component
function LikeButton() {
  // Set the component state
  const [count, setCount] = useState(parseInt(jsforwp_likes.count));
  const hasVotedStore = JSON.parse(localStorage.getItem(`jsforwp_likes`)) || [];
  const [hasVoted, setHasVoted] = useState(
    hasVotedStore.includes(jsforwp_likes.postID)
  );

  // Function to get votes from local storage
  const getVotes = () => {
    return JSON.parse(localStorage.getItem(`jsforwp_likes`)) || [];
  };

  // Send the vote API request
  const vote = () => {
    if (!hasVoted) {
      wp.apiFetch({
        path: `/likes/v1/${jsforwp_likes.postID}`,
        method: "POST",
        data: {},
      })
        .then((res) => {
          // After success
          setCount(count + 1);
          setHasVoted(true);
          localStorage.setItem(
            `jsforwp_likes`,
            JSON.stringify([...getVotes(), jsforwp_likes.postID])
          );
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <button onClick={vote} disabled={hasVoted.toString()}>
      Like ♡<span class="count">{count}</span>
    </button>
  );
}

// Add the LikeButton to the post
wp.element.render(<LikeButton />, buttonContainer);
