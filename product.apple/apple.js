// Likee
const likes = document.querySelectorAll(".twoLike");

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("active");
    if (like.classList.contains("active")) {
      like.textContent = "❤️";
    } else {
      like.textContent = "🤍";
    }
  });
});
