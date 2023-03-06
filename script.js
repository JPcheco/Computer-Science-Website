// Scroll up button
    let scrollButton = document.getElementById("scrollbtn");

    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 25){
            scrollButton.classList.add("active");
        }else{
            scrollButton.classList.remove("active");
        }
    });

    // this is how to scoll to the top
    scrollButton.addEventListener("click", function(){
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