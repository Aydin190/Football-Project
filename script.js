let a = document.getElementById("box"); 
let x = 0, y=0;

document.addEventListener("keydown", (e)=>{
    if(e.key==="ArrowRight") x+=10;
    if(e.key==="ArrowLeft") x-=10;
    if(e.key==="ArrowDown") y+=10;
    if(e.key==="ArrowUp") y-=10;
    a.style.left = x+"px";
    a.style.top = y+"px";
})