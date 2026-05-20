const display = document.querySelector('.inner-display p');
const buttons = document.querySelectorAll('button');

let vyraz = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        
        switch(value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                vyraz += value;
                display.textContent = vyraz;
            break;

            case '+':
            case '-':
            case '*':
            case '/':
                vyraz += value;
                display.textContent = vyraz;
            break;
    
            case 'power':
                vyraz += '**2';
                display.textContent = vyraz;
            break;
    
            case 'sqrt':
                vyraz = 'Math.sqrt(' + vyraz + ')';
                display.textContent = vyraz;
            break;
            
            case '=':
                vyraz = String(eval(vyraz));
                display.textContent = vyraz;
            break;
            case 'AC':
                vyraz = '';
                display.textContent = '0';
            break;
            case 'backspace':
                vyraz = vyraz.slice(0, -1);
                display.textContent = vyraz || '0';
            break;
            case '%':
                vyraz = String(eval(vyraz) / 100);
                display.textContent = vyraz;
            break;
        }
        
      
    });
});