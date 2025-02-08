document.addEventListener('DOMContentLoaded',function(){
  const Display = document.querySelector('.display')
  const Number = Array.from(document.querySelectorAll('.number button'));

  Number.forEach(Number => {
    Number.addEventListener('click', ()=>{
    switch(Number.className){
    case 'AC':
      Display.innerText = '';
      break;
    case 'delete':
      Display.innerHTML = Display.innerText.slice(0,-1);
      break;
      case 'submit':
        try{
        Display.innerText = eval(Display.innerText);  
        }
        catch{
          Display.innerText = 'Error';
        }
        break;
        default :
        Display.innerText += Number.innerText;
    }
    });
    
  });
  
});
