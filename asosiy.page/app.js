let API = "https://fakestoreapi.com/products?limit=8";
let wrapper = document.querySelector(".wrapper-new");
let searchInp = document.querySelector(".searchInp");

let getProducts = async (inpValue = "") => {
  try {
    let request = await fetch(API);
    let products = await request.json();
    console.log(products);

    let filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(inpValue.toLowerCase());
    });

    wrapper.innerHTML = "";

    filteredProducts.forEach((item) => {
      let newTitle =
        item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title;

      wrapper.innerHTML += `
        <div class='product-card'>
            <img src='${item.image}' />
            <h3>${newTitle}</h3>
            <h4>${item.price}</h4>
            <button class='product-btn'>Buy Now</button>
            <span class="like">🤍</span>
        </div>`;
    });

    // Likee
    const likes = document.querySelectorAll(".like");

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
  } catch (error) {
    console.log(error);
  }
};

getProducts();

searchInp.addEventListener("input", (e) => {
  getProducts(e.target.value);
});

// Two Likee
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
