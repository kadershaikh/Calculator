let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(`Button text is ${buttonText}.`);
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == '√'){
            screen.value = Math.sqrt(screenValue);
        }
        else if(buttonText == 'x²'){
            screen.value = Math.pow(screenValue, 2);
        }
        else if(buttonText == 'x³'){
            screen.value = Math.pow(screenValue, 3);
        }
        else if(buttonText == '⌫'){
            screen.value = screenValue.substr(0, screenValue.length - 1)
            screenValue = screen.value;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    });
}