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

// filterBtn.addEventListener("click", () => {
// filterModal.classList.toggle("filter-modal-active");
//   filterItem.addEventListener("click", () => {
//     console.log("salom");
//   });
// });
