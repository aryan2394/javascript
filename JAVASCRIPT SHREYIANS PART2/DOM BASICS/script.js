let inp=document.querySelector("input");
let span=document.querySelector("span");
inp.addEventListener("input",(e)=>
{
    let charactersleft=20-inp.value.length;
    span.textContent=charactersleft;
    if(charactersleft<0)
    {
        span.style.color="red";
    }
    else
    {
        span.style.color="green";
    }
})

