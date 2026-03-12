function setLang(lang){

document.querySelectorAll("[data-ua]").forEach(el=>{

el.innerText = el.dataset[lang]

})

}

let currentIndex=0
let images=[]

function openImage(img){

images=[...document.querySelectorAll(".gallery img")]

currentIndex=images.indexOf(img)

document.getElementById("viewer").style.display="flex"
document.getElementById("viewer-img").src=img.src

}

function closeImage(){

document.getElementById("viewer").style.display="none"

}

document.addEventListener("keydown",e=>{

if(e.key==="ArrowRight") nextImage()
if(e.key==="ArrowLeft") prevImage()

})

function nextImage(){

currentIndex++

if(currentIndex>=images.length) currentIndex=0

document.getElementById("viewer-img").src=images[currentIndex].src

}

function prevImage(){

currentIndex--

if(currentIndex<0) currentIndex=images.length-1

document.getElementById("viewer-img").src=images[currentIndex].src

}
