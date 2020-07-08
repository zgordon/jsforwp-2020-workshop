const article = document.querySelector(`article.post`);
const buttonMarkup = `
  <div  id="jsforwp-like">
    <button>
      Like ♡
      <span class="count"></span>
    </button>
  </div>`;

article.insertAdjacentHTML(`afterbegin`, buttonMarkup);

const button = document.querySelector(`#jsforwp-like button`);
button.addEventListener(`click`, vote);

function vote() {
  console.log(`Vote!`);
}
