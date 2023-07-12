const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");


if (bar) {
    bar.addEventListener("click",()=>{
        navbar.classList.add("active");
        document.getElementById("mobile").style ="display:none"
    })
};
if (close) {
    close.addEventListener("click",()=>{
        navbar.classList.remove("active");
        document.getElementById("mobile").style ="display:block"
    })
}