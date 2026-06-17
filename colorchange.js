const p=document.getElementById("parent")

p.addEventListener('click',(e)=>{
    const btn=e.target;
    const body=document.querySelector('body')
    if(btn.tagName=='BUTTON') body.style.backgroundColor=btn.id;
    
}) 