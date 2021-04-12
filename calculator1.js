console.log("Js E starts exicution")

var a , b ,sum ,sub ,mul ,div;

a = 0;

b = 0;

 function addition(){
     a = parseInt(document.getElementById('txt1').value)
     console.log("value of a:"+a)
     b = parseInt(document.getElementById('txt2').value)
     console.log("value of b:"+b)
    
     sum = a+b; 
     console.log("sum of a,b:"+sum)
     output = document.getElementById('result').value=sum;
 }

function substraction(){
    a = parseInt(document.getElementById('txt1').value)
    b = parseInt(document.getElementById('txt2').value)
    console.log("value of a:"+a)
     console.log("value of b:"+b)
    sub = a-b;
    console.log("sub of a ,b:"+sub)
    output = document.getElementById('result').value=sub;
}

function multiplication(){
    a = parseInt(document.getElementById('txt1').value)
    b = parseInt(document.getElementById('txt2').value)
    console.log("value of a:"+a)
    console.log("value of b:"+b)
    output = document.getElementById('result').value=mul
    mul = a*b;
    console.log("mul of a ,b:"+mul)
}
 function division(){
    a = parseInt(document.getElementById('txt1').value)
    b = parseInt(document.getElementById('txt2').value)
    console.log("value of a:"+a)
    console.log("value of b:"+b)
    output = document.getElementById('result').value=div
     div = a/b;
     console.log("div of a ,b:"+div)
 }

 console.log("Js E stop exicution")