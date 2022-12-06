class Calculator{

    sum(a,b){
        return (a+b) 
    }

    substract(a,b){
        return (a-b)
    }

    multiple(a,b){
        return(a*b)
    }

    divide(a,b){
        return (a/b)
    }
}

function setAction(){
    const buttonIDs = document.getElementsByClassName('ibutton');
    let i;
    for (i=0; i < buttonIDs.length; i++){
        buttonIDs[i].addEventListener('click',calculate);
    }
}

function calculate(){
    const value1 = document.getElementById('ivalue1');
    const value2 = document.getElementById('ivalue2');
    const calc = new Calculator();

    const operation = event.currentTarget;
    let z = 0;
    switch (operation.value){
        case '+': z = calc.sum(Number(value1.value),Number(value2.value));
        break;
        case '-': z = calc.substract(Number(value1.value),Number(value2.value));
        break;
        case '*': z = calc.multiple(Number(value1.value),Number(value2.value));
        break;
        case '/': {
            if (!Number(value2.value)){
                alert("Division by 0 is prohibited!");
                z = null;
                break;
            }else{
                z = calc.divide(Number(value1.value),Number(value2.value));
            }
        }
        break;
    }
    const result = document.getElementById('result');
    result.textContent=`Итого:  ${z}`;
}
