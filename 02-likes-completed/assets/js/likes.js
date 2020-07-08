const article = document.querySelector(`article.post`);
const buttonMarkup = `
  <div  id="jsforwp-like">
    <button>
      Like ♡
      <span class="count"></span>
    </button>
  </div>`;

article.insertAdjacentHTML(`afterbegin`, buttonMarkup);
updateLikeCount(jsforwp_likes.count);

const button = document.querySelector(`#jsforwp-like button`);
button.addEventListener(`click`, vote);
if (hasVoted()) button.disabled = "true";

function vote() {
  if (!hasVoted()) {
    wp.apiFetch({
      path: `/likes/v1/${jsforwp_likes.postID}`,
      method: "POST",
      data: {},
    })
      .then((res) => {
        updateLikeCount(res);
        localStorage.setItem(
          `jsforwp_likes`,
          JSON.stringify([...getVotes(), jsforwp_likes.postID])
        );
        button.disabled = "true";
      })
      .catch((error) => console.error(error));
  }
}

function updateLikeCount(count) {
  const likeCount = document.querySelector(`.count`);
  likeCount.innerHTML = count;
}

function getVotes() {
  return JSON.parse(localStorage.getItem(`jsforwp_likes`)) || [];
}

function hasVoted() {
  const votes = getVotes();
  const hasVoted = votes.includes(jsforwp_likes.postID);
  return hasVoted;
}
