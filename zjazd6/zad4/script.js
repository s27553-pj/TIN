document.addEventListener("DOMContentLoaded",function (){
    let menubutton = document.getElementById("menuButton");
    let links = document.getElementById("links")
    menubutton.addEventListener('click', function (){
        links.classList.toggle('show');
    })
})