// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from './navbar.js'
console.log(navbar)
document.getElementById("navbar").innerHTML=navbar()

let getData=JSON.parse(localStorage.getItem("serchData"));


append(getData)

function append(data){
    let container=document.getElementById("results");
container.innerHTML=null
data.forEach(({urlToImage,title,description},index) => {
    let div=document.createElement("div")
    div.setAttribute("class","news")
    div.addEventListener("click",function(){
        console.log("datdffg",data,index)
let dat=data[index]
        localStorage.setItem("news",JSON.stringify(dat))

        window.location.href="news.html"
    })

let img=document.createElement("img");
img.setAttribute("src",urlToImage);
let div1=document.createElement("div")
let title1=document.createElement("h3")
title1.innerHTML=title;

let des=document.createElement("p");
des.innerHTML=description;
div1.append(title1,des)

div.append(img,div1)

container.append(div)

});
}
