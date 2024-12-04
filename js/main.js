const modalAccaount = document.querySelector(".modal-accaunt");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  modalAccaount.classList.toggle("modal-accaunt-active");
  if (menuBtn.src.includes("Menu.svg")) {
    menuBtn.src = "img/close.svg";
  } else {
    menuBtn.src = "img/Menu.svg";
  }
});

// filter-modal
const filterBtn = document.querySelectorAll(".filter-btn");
const filterModal = document.querySelector(".filter-modal");
const filterItem = document.querySelectorAll(".filter-item");

filterItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("filter-item-active");
  });
});

filterBtn.forEach((filterItem) => {
  filterItem.addEventListener("click", () => {
    filterModal.classList.toggle("filter-modal-active");
    window.addEventListener("click", (e) => {
      if (e.target === filterModal) {
        filterModal.style.display = "none";
      }
    });
  });
});

// productni chiqarish
const productsData = JSON.parse(localStorage.getItem("products"));
const pizzaSection = document.getElementById("pizza-ul");

pizzaSection.innerHTML = productsData
  .slice(0, 6)
  .map(
    (item) =>
      `  <li>
              <img src="img/product-img/pizza1.svg" alt="" />
              <div class="product-content">
                <h3>${item.name}</h3>
                <p>
                ${item.description}
                </p>
                <div class="cost">
                  <span class="new-price">от ${item.price} ₽</span>
                  <span class="old-price">от 699 ₽</span>
                </div>
              </div>
            </li>
            `
  )
  .join("");

const sushiSection = document.getElementById("sushi-ul");
sushiSection.innerHTML = productsData
  .slice(7, 12)
  .map(
    (item) =>
      `  <li>
              <img src="img/product-img/sushi.svg" alt="" />
              <div class="product-content">
                <h3>${item.name}</h3>
                <p>
                ${item.description}
                </p>
                <div class="cost">
                  <span class="new-price">от ${item.price} ₽</span>
                </div>
              </div>
            </li>
            `
  )
  .join("");

const snacksSection = document.getElementById("snacks-ul");
snacksSection.innerHTML = productsData
  .slice(12, 18)
  .map(
    (item) =>
      `  <li>
              <img src="img/product-img/pizza1.svg" alt="" />
              <div class="product-content">
                <h3>${item.name}</h3>
                <p>
                ${item.description}
                </p>
                <div class="cost">
                  <span class="new-price">от ${item.price} ₽</span>
                </div>
              </div>
            </li>
            `
  )
  .join("");

const sweetSection = document.getElementById("sweet-ul");
sweetSection.innerHTML = productsData
  .slice(18, 24)
  .map(
    (item) =>
      `  <li>
             <img src="img/product-img/sweet.svg" alt="" />
              <div class="product-content">
                <h3>${item.name}</h3>
                <p>
                ${item.description}
                </p>
                <div class="cost">
                  <span class="new-price">от ${item.price} ₽</span>
                </div>
              </div>
            </li>
            `
  )
  .join("");

const drinkSection = document.getElementById("drink-ul");
drinkSection.innerHTML = productsData
  .slice(24 - 30)
  .map(
    (item) =>
      `  <li>
              <img src="img/product-img/drink1.svg" alt="" />
              <div class="product-content">
                <h3>${item.name}</h3>
                <p>
                ${item.description}
                </p>
                <div class="cost">
                  <span class="new-price">от ${item.price} ₽</span>
                </div>
              </div>
            </li>
            `
  )
  .join("");

// const snacksSection = document.getElementById("snacks-ul");
// snacksSection.innerHTML = productsData
//   .slice(12, 18)
//   .map(
//     (item) =>
//       `  <li>
//               <img src="img/product-img/pizza1.svg" alt="" />
//               <div class="product-content">
//                 <h3>${item.name}</h3>
//                 <p>
//                 ${item.description}
//                 </p>
//                 <div class="cost">
//                   <span class="new-price">от ${item.price} ₽</span>
//                 </div>
//               </div>
//             </li>
//             `
//   )
//   .join("");

// const sweetSection = document.getElementById("sweet-ul");
// sweetSection.innerHTML = productsData
//   .slice(18, 24)
//   .map(
//     (item) =>
//       `  <li>
//              <img src="img/product-img/sweet.svg" alt="" />
//               <div class="product-content">
//                 <h3>${item.name}</h3>
//                 <p>
//                 ${item.description}
//                 </p>
//                 <div class="cost">
//                   <span class="new-price">от ${item.price} ₽</span>
//                 </div>
//               </div>
//             </li>
//             `
//   )
//   .join("");
