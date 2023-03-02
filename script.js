let mainNav = document.getElementById("nav");
let navBarToggle = document.getElementById("hb-btn");

navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle("active");
});


// FAQ collapse inner workings
const toggles = document.querySelectorAll('.faq-toggle')
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})