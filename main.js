const topbutton = document.querySelector(".top-button")
window.addEventListener("scroll", () => {
  topbutton.classList.toggle("active" , window.scrollY >= 100) 
})