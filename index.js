let card=document.querySelector('#card')
let love=document.querySelector('i')
let like=document.querySelector('.btn')
let check=0;
card.addEventListener("dblclick",function(){
    
        love.style.transform="translate(-50% ,-50%) scale(2)"
        love.style.opacity="1"
    setTimeout(function(){

        love.style.transform="translate(-50% ,-50%) scale(0)"
    },3500)
    setTimeout(function(){

        love.style.opacity="0"
    },1000)  
    
})
like.addEventListener("click",function(){
    if(check===0){

        like.style.backgroundColor='red'
        // like.style.overFlow='hidden'
        
        check=1
    }
    else{
        like.style.backgroundColor='white'
        
        // like.style.border="2px solid black"
        check=0
    

    }
})