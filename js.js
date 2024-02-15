/*let kvadrat=document.querySelector(".kvadrat")
let btnShow=document.querySelector("#btnShow")


btnShow.onclick=function()
{
    if(kvadrat.style.visibility=="visible"||kvadrat.style.visibility=='')
    {
        kvadrat.style.visibility="hidden";
        btnShow.value="Показать квадрат"
    }
    else
    {
        kvadrat.style.visibility="visible"
        btnShow.value="Скрыть квадрат"
    
}
}
*/

/*
let elements=document.querySelectorAll(".element");


for(let i=0;i<elements.length;i++)
{
    
    elements[i].onclick=function()
    {
            
            elements[i].style.cssText="transform:scale(0);";
            setTimeout(increaseElement,3000,i);
        }
    

}

let increaseElement = function(num)
{
    elements[num].style.cssText="transform:scale(1);";
    switch(num)
    {
        case 0: alert('1');
        break;
        case 2: alert('2');
        break;
        case 3: alert('3');break;

    }
}

*/

let multiplyNumeric=(obj)=>
{       
    let massive=Object.keys(obj);
    
    
    
    for(let i=0;i<massive.length;i++)
    {
        if(typeof(obj[massive[i]])=='number')
            obj[massive[i]]*=2;
    }
        
}    

let obj = {
    John: 100,
    Ann: 160,
    gfgdh:'wewe',
    Pete: 130
  }

multiplyNumeric(obj);
console.log(obj);
