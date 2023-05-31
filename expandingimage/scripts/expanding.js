const imgExp = document.querySelectorAll(".image");
const mainImage = document.querySelector("#main-image")




imgExp.forEach(element => {
    element.addEventListener("click", function(e) {
        imgExp.forEach(el => {
            el.classList.remove("active");
        });

        element.classList.add("active");
        
    })
});

