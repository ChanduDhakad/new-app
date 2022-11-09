// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page





import navbar from './navbar.js'
// console.log(navbar)
document.getElementById("navbar").innerHTML=navbar()
document.getElementById("search_input").addEventListener("keypress",serchnew)
 async function serchnew(event){
    let query=document.getElementById("search_input").value;
    if(event.key=="Enter"){
if(query=="tesla"||query=="twitter"){
    console.log("queery ",query)
    const url=`https://masai-api.herokuapp.com/news?q=${query}`
  let resp=await fetch(url);
let data=await resp.json();
console.log("Ser ",data.articles)
localStorage.setItem("serchData",JSON.stringify(data.articles))

window.location.href="search.html"
}
    }
}


  
 


document.getElementById("in").addEventListener("click",indiaNew)
indiaNew()
 async function indiaNew(){

const url=`https://masai-api.herokuapp.com/news/top-headlines?country=in`
let res= await fetch(url);
let da=await res.json()
console.log("data  ",da.articles)

append(da.articles);
}


document.getElementById("us").addEventListener("click",usa)

 async function usa(){

const url=`https://masai-api.herokuapp.com/news/top-headlines?country=us`
let res= await fetch(url);
let da=await res.json()
console.log("data  ",da.articles)

append(da.articles);
}

document.getElementById("ch").addEventListener("click",ch)

 async function ch(){

const url=`https://masai-api.herokuapp.com/news/top-headlines?country=ch`
let res= await fetch(url);
let da=await res.json()
console.log("data  ",da.articles)

append(da.articles);
}
document.getElementById("uk").addEventListener("click",uk)

 async function uk(){

const url=`https://masai-api.herokuapp.com/news/top-headlines?country=uk`
let res= await fetch(url);
let da=await res.json()
console.log("data  ",da.articles)

append(da.articles);
}
document.getElementById("nz").addEventListener("click",nz)

 async function nz(){

const url=`https://masai-api.herokuapp.com/news/top-headlines?country=nz`
let res= await fetch(url);
let da=await res.json()
console.log("data  ",da.articles)

append(da.articles);
}


function append(data){
    let container=document.getElementById("results");
container.innerHTML=null
data.forEach(({urlToImage,title,description},index) => {
    let div=document.createElement("div")
    div.setAttribute("class","news");
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



