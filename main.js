var overlay=document.querySelector(".popup-overlay")
var menu=document.querySelector(".popup-menu")

var add=document.getElementById("add-button")

add.addEventListener("click", function(){
    overlay.style.display="block"
      menu.style.display="block"
})

// function add(){
//     overlay.style.display="block"
//     menu.style.display="block"
// }

var cancle=document.getElementById("cancle-book")
cancle.addEventListener("click", function(event){
    event.preventDefault()
    overlay.style.display="none"
    menu.style.display="none"
})

var  addbtn=document.getElementById("add-book")
addbtn.addEventListener("click",function(event){
    event.preventDefault()
})

//container,add-book,book-title-input,book-author-input,text-here

var newcontainer=document.querySelector(".container")
var newbooktitle=document.getElementById("book-title-input")
var newbookauthor=document.getElementById("book-author-input")
var newtext=document.getElementById("text-here")
var newaddbook=document.getElementById("add-book")
var editbtn=document.getElementById("editbtn")


newaddbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${newbooktitle.value}</h2>
    <h3>${newbookauthor.value}</h3>
    <p>${newtext.value}</p>
    <button onclick="newdelete(event)">Delete</button>
    <button onclick="edit()">Edit</button>`
    newcontainer.append(div)
    overlay.style.display="none"
    menu.style.display="none"
})

function newdelete(event){
    event.target.parentElement.remove()
}

var editbtn=document.getElementById("editbtn")

function edit(){
    overlay.style.display="block"
      menu.style.display="block"
}