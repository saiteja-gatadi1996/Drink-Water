const smallCups=document.querySelectorAll('.cup-small')
const liters=document.getElementById('liters')
const percentage=document.getElementById('percentage')
const remained=document.getElementById('remained')

updateBigCup();

//onclick we are hightlighting
smallCups.forEach((cup,idx)=>{
   cup.addEventListener('click',()=>highlight(idx))
})

//idx is the one we clicked, idx2 which we are looping

function highlight(idx){
    if(smallCups[idx].classList.contains('full')&&!smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add('full')

        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}


function updateBigCup(){
    //displays numbers upon clicking
    const fullcups=document.querySelectorAll('.cup-small.full').length

    //8
    const totalCups=smallCups.length

    if(fullcups===0){
        percentage.style.visibility='hidden'
        percentage.style.height=0;
    }else{
        percentage.style.visibility='visible'

        //(1/8*330)px to (8/8*330)px
        percentage.style.height=`${fullcups/totalCups*330}px`

        //(1/8*100) to (8/8*100) => 12.5 to 100%
        percentage.innerText=`${fullcups/totalCups*100}%`


    }
//removing the annoying remained
if(fullcups===totalCups){
    remained.style.visibility='hidden'
    remained.style.height=0
}
else{
    remained.style.visibility='visible'

    //2 liters-(250ml*(you click)/1000)
    liters.innerText=`${2-(250*fullcups/1000)}`
}

}