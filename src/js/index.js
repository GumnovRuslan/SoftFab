window.popupButton?.addEventListener("click", valid);

let articles = document.querySelectorAll(".block");

articles.forEach((article) => {
  let icon = article.querySelector(".icon-arrow");
  if (icon) {
    let text = article.querySelector("p[name='text']");
    if (text.textContent.length > 100) {
      article.dataset.text = text.textContent;
      text.textContent = article.dataset.text.slice(0, 100) + "...";
      icon.addEventListener("click", (e) => {
        if (+icon.dataset.open) showLess(article, text, icon);
        else showMore(article, text, icon);
      });
    } else {
      icon.style.display = "none";
    }
  }
});

function showMore(article, text, icon) {
  icon.dataset.open = 1;
  text.textContent = article.dataset.text;
  icon.classList.add("icon-arrow--secondary");
  icon.style.transform = "rotate(-90deg)";
}

function showLess(article, text, icon) {
  icon.dataset.open = 0;
  text.textContent = article.dataset.text.slice(0, 100) + "...";
  icon.classList.remove("icon-arrow--secondary");
  icon.style.transform = "rotate(90deg)";
}

function valid() {
  let inputsContainer = window.popupForm.querySelectorAll(".popup__input-container");
  inputsContainer.forEach((inputContainer) => {
    let input = inputContainer.querySelector(".input[required]");
    if (input) {
      let icon = inputContainer.querySelector(".popup__input-icon");
      if (!input.value) {
        icon.style.color = "var(--color-error)";
        input.style.outline = "2px solid var(--color-error)";
      } else {
        icon.style.color = "";
        input.style.outline = "";
      }
    }
  });
}
