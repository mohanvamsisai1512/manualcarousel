let prevbtn=document.getElementById('prevbtn');
let nxtbtn=document.getElementById('nxtbtn'); 
let scrollbar=document.getElementById('scrollbar'); 

nxtbtn.addEventListener('click', ()=>{
    scrollbar.scrollBy({left:scrollbar.offsetWidth,behaviour:'smooth'})
}); 

prevbtn.addEventListener('click', ()=>{
    scrollbar.scrollBy({left:-(scrollbar.offsetWidth),behaviour:'smooth'})
});

