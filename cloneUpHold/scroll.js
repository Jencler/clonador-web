window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav")
    nav.classList.toggle("abajo",window.scrollY>140)
})