const grab = (selector) => document.querySelector(selector)

const counter = grab("#counter");
const minusBtn = grab("#\\-");
const plusBtn = grab("#\\+");
const heartBtn = grab("#\\<3");
const pauseBtn = grab("#pause");
const likesUl = grab(".likes");
const commentsUl = grab(".likes");
const commentForm = grab("#comment-form");


let timerOn = true;
setInterval(() => {
  if (timerOn) {
    counter.innerText = parseInt(counter.innerText) + 1;
  }
}, 1000);

minusBtn.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});

plusBtn.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});

pauseBtn.addEventListener("click", () => {
  switch (timerOn) {
    case true:
      timerOn = false;
      break;
    case false:
      timerOn = true;
      break;
  }
});

heartBtn.addEventListener("click", () => {
  // likesUl.innerHTML = "<li>1 has 1 like</li>"
  let lisCopy = [...likesUl.children];
  let currentLike = lisCopy.filter((li) => {
    return li.innerText.split(" ")[0] === counter.innerText;
  })[0];

  if (currentLike) {
    let innerText = currentLike.innerText.split(" ");
    innerText[2] = parseInt(innerText[2]) + 1;
    innerText[3] = "likes"
    currentLike.innerText = innerText.join(" ");
  } else {
    likesUl.innerHTML += `<li>${counter.innerText} has 1 like</li>`
  }
});

// str.substr(0, str.indexOf(" "))
