var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")
var flag = 0 
btn.addEventListener("click",function(){
    if(flag==0){
    bulb.style.backgroundColor="yellow"
flag=1
btn.innerHTML="Off"}
else{
    bulb.style.backgroundColor="#fff"
    btn.innerHTML="On"
    flag=0
}

})