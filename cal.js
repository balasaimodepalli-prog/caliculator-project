const buttons = document.querySelectorAll('.btn, .opr, .ac, .undo');
const result = document.querySelector('.result');
let stackcal = '';
function stack(val){
    if(val==='^'){
        val='**';
    }
    stackcal+=val;
    result.value=stackcal;
}
function calicualor(){
    try{
        result.value=eval(stackcal);
        stackcal=result.value;
    }
    catch{
        result.value="error";
        stackcal='';
    }
}
function undo(){
    stackcal=stackcal.slice(0,-1);
    result.value=stackcal;
}
function clearkey(){
    stackcal='';
    result.value='';
}
buttons.forEach(button=>{
    button.addEventListener('click',()=>{

      const value=button.textContent;
      
       if(button.classList.contains('ac')){
                
              clearkey();
          }
          else if(button.classList.contains('undo')){
              undo();
          }
          else if(value==='='){
          calicualor();
      }
        else{
          stack(value);
        }
    })
});
document.addEventListener('keydown',(e)=>{
      const btn=e.key;
      
      
       if(btn==='Delete'){
              clearkey();
          }
          else if(btn==='Backspace'){
              undo();
          }
          else if(btn==='=' || btn==='Enter'){
          calicualor();
      }
        else if("0123456789+-*/.^".includes(btn)){
          stack(btn);
        }
       
    });


