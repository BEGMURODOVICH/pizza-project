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
