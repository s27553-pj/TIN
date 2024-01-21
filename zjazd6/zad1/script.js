function klik1(){
    // let div1=document.getElementById("pierwszy")
    // let div2=document.getElementById("drugi")
    // let div3=document.getElementById("trzeci")
    // let div4=document.getElementById("czwarty")
    // div1.innerHTML='<div class="dodatek"></div>'
    // div2.innerHTML='<div class="dodatek"></div>'
    // div3.innerHTML='<div class="dodatek"></div>'
    // div4.innerHTML='<div class="dodatek"></div>'
    // let dodatkowedivy = document.getElementsByClassName("dodatek")
    // for (let i=0; i<dodatkowedivy.length;i++) {
    //     dodatkowedivy[i].style.backgroundColor = "blue"
    //     dodatkowedivy[i].style.height = "50px"
    //     dodatkowedivy[i].style.width = "50px"
    //     dodatkowedivy[i].style.border = "1px solid black"
   // }
    let div= document.createElement("div")
    div.className="box"
    document.body.appendChild(div)
}
function klik2(){
    let divusun = document.querySelector(".box");
    if (divusun) {
        divusun.remove();
    }


}
function klik3(){
    let div = document.getElementById("trzeci")
    div.style.backgroundColor="blue"
}
function klik4(){
    // let div1=document.getElementById("pierwszy")
    // let div2=document.getElementById("drugi")
    // let div3=document.getElementById("trzeci")
    // let div4=document.getElementById("czwarty")
    // div1.innerText="nowy tekst"
    // div2.innerText="nowy tekst"
    // div3.innerText="nowy tekst"
    // div4.innerText="nowy tekst"
    let divy=document.querySelectorAll(".box")
    divy.forEach(div=> {
        div.innerText="nowy tekst"
    })
}