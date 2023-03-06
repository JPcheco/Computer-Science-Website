// Scroll up button
let scrollButton = document.getElementById("scrollbtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 25) {
        scrollButton.classList.add("active");
    } else {
        scrollButton.classList.remove("active");
    }
});

// this is how to scoll to the top
scrollButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// FAQ collapse inner workings
const toggles = document.querySelectorAll('.faq-toggle')
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('br');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}