DOM - Document Object Model
DOM Manipulation 
1):
What Is DOM ??

Answer :)

Document Object Model Full Form 

2):
4 Pillars Of DOM

Answer :)

1. Selection Of An Element 

eg.
document.querySelector("h1") in js to select an element
var a = document.querySelector("h1")
console.log(a)

2. Changing HTML

eg.
var a = document.querySelector("h1")
a.innerHTML="Dev"

3. Changing CSS

always in camel case
eg.
var a = document.querySelector("h1")
a.innerHTML="Dev"
a.style.color="red"

4. Event Listener

eg.

var a = document.querySelector("h1")
a.style.color="red"
a.style.backgroundColor="rebeccapurple"
a.addEventListener("click",function(){
    a.innerHTML="main woh nahi jo pehle tha"
    a.style.color="yellow"
    a.style.backgroundColor="#000"
})

()
Select all element 
var h = document.querySelectorAll("h1")
return nodelist
var h = document.querySelectorAll("h1")
console.log(h)
h.forEach(function(e){
console.log(e)
})








