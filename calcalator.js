const showNumber = document.querySelector('#showNumber');
let result = null;
let operation;
let numbers = [];


function getOperation(op) {
     if (numbers[0]) {
        getResult();
     }
        operation = op;
        if (showNumber.textContent) {
             numbers.push(Number(showNumber.textContent)); 
            }
            showNumber.textContent = null;    
}

function getNumber(number) {
    showNumber.textContent += number; 
}


function getResult() {

    numbers.push(Number(showNumber.textContent));
    
    if (operation == '+') {
        result = numbers[0] + numbers[1];
    }
    else if (operation == '-') {
        result = numbers[0] - numbers[1];
    }
    else if (operation == '*') {
        result = numbers[0] * numbers[1];
    }
    else if (operation == '/') {
        if ( numbers[1] == 0) {
            alert('You can\'t divide by Zero, the page will be reloaded. Try again after 2000 week.');
            reset() ;
        }else result = numbers[0] / numbers[1];
        
    }else result = numbers[0]
    operation = null;
    numbers = [];
    
    return showNumber.textContent = result;
       
    }
function dot() {
	let dotCheck = showNumber.textContent;
	if (!dotCheck.includes('.')) {
		showNumber.textContent += '.';
	}
}
function reset() {
    showNumber.textContent = '';
}

function back() {
    showNumber.textContent = showNumber.textContent.slice(0,-1);
}
