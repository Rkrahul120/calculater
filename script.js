function AddNum(){
    let num1=document.getElementById("firstbox").value
    let num2=document.getElementById("secondbox").value
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    let h1=document.getElementById("result")
    res=num1+num2
    h1.innerHTML="RESULT:" +res
}
function SubNum(){
    let num1=document.getElementById("firstbox").value
    let num2=document.getElementById("secondbox").value
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    res=num1-num2
    let h1=document.getElementById("result")
    h1.innerHTML="RESULT:"+res
}
function MulNum(){
    let num1=document.getElementById("firstbox").value
    let num2=document.getElementById("secondbox").value
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    res=num1*num2
    let h1=document.getElementById("result")
    h1.innerHTML="RESULT:"+res
}
function DivNum(){
    let num1=document.getElementById("firstbox").value
    let num2=document.getElementById("secondbox").value
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    res=num1/num2
    let h1=document.getElementById("result")
    h1.innerHTML="RESULT:"+res
}
function PowNum(){
    let num1=document.getElementById("firstbox").value
    let num2=document.getElementById("secondbox").value
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    res=num1**num2
    let h1=document.getElementById("result")
    h1.innerHTML="RESULT:"+res
}