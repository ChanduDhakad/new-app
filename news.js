// Ude Import export (MANDATORY)

import navbar from './navbar.js'
console.log(navbar)
document.getElementById("navbar").innerHTML=navbar()

let data=JSON.parse(localStorage.getItem("news"));

append(data)

function append(data){
    console.log(data)
    let container=document.getElementById("detailed_news");
container.innerHTML=null
// data.forEach(({urlToImage,title,description},index) => {
    let div=document.createElement("div")
    div.setAttribute("class","new");


let img=document.createElement("img");
img.setAttribute("src",data.urlToImage);
let div1=document.createElement("div")
let title1=document.createElement("h3")
title1.innerHTML=data.title;

let des=document.createElement("p");
des.innerHTML=data.description;
div1.append(title1,des)

div.append(img,div1)

container.append(div)

// });

}