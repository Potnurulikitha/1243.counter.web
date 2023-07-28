let updatevalue1=document.getElementById("updatevalue1")
function onincrement()
{
    let a=updatevalue1.textContent;
    let countervalue=parseInt(a)+1;
    if(countervalue>0)
    {
        updatevalue1.style.color="purple"
    }
    else if(countervalue<0)
    {
        updatevalue1.style.color="orange"
    }
    else{
        updatevalue1.style.color="silver";
    }
    updatevalue1.textContent=countervalue;
}
function onreset1()
{
    updatevalue1.textContent=0;
    updatevalue1.style.color="green";


}
function ondecrement()
{
    let a=updatevalue1.textContent;
    let countervalue=parseInt(a)-1;
    if(countervalue>0)
    {
        updatevalue1.style.color="purple"
    }
    else if(countervalue<0)
    {
        updatevalue1.style.color="orange"
    }
    else{
        updatevalue1.style.color="silver";
    }
    updatevalue1.textContent=countervalue;
}