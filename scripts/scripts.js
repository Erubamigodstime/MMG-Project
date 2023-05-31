function toggleMenu() {
    document.getElementById("sideBar").classList.toggle("active");
    console.log("it is working ")
}

const toggle = document.getElementById('btn')
toggle.onclick = toggleMenu;

// let btn = document.querySelector("#btn");
// let leftContent = document.querySelector(".left-content");

// btn.onclick = function (){
//     leftContent.classList.toggle(".active");
// };
// console.log("it is working ")