function calculate(op)
{
    const num1=document.getElementById('num1');
    const num2=document.getElementById('num2');

    const res=document.getElementById('res');

    const n1=parseFloat(num1.value);
    const n2=parseFloat(num2.value);

    if(isNaN(n1) || isNaN(n2))
    {
        res.value='Invalid';
        return;
    }

    switch(op)
    {
        case 'add':
            res.value=n1+n2;
            break;
        case 'subtract':
            res.value=n1-n2;
            break;
        case 'multiply':
            res.value=n1*n2;
            break;
        case 'divide':
            res.value=n2!=0?(n1/n2):'Divide by zero';
            break;
    }
}