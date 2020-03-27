
function isInputNumber(evt) {

    let userInput = evt.key;
    
    if((/[a-z]/.test(userInput))) {
        evt.preventDefault();
    }
}

//to solve all the input value
function calcNumbers(result){
    form.userInput.value=form.userInput.value+result;    
}

//function to display the sqaure root of a number
function display(input) {
    document.getElementById('userInput').value += input;
    document.getElementById('userInput').focus();
}

//function for percentage
function percent(val) {
    let x = document.getElementById('userInput').value;
    let a = eval(x);
    let y = a*100;
    document.getElementById('displayResult').value = y + '%';
}

