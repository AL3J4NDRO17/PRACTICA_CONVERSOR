var a=0,b=0,re=0
var a1=0,c1=0,re2=0

var dp=document.getElementById("dp")

dp.addEventListener("click",function(evento){
    evento.preventDefault
    var a=document.getElementById("a").value
    var b=document.getElementById("b").value
    var caja=document.getElementById("re1")
    var elementP = document.createElement('p');
    
    console.log("se ejecuta")
    re=(a*b)
    if(re>0)
    {

    elementP.textContent=""+re
    caja.appendChild(elementP);

    }
    else
    {
    alert("No se poyi")
    }
    
})
console.log(convertdp)
var pd=document.getElementById("pd")
pd.addEventListener("click",function(event){
    event.preventDefault
    var a1=document.getElementById("a1").value
    var c1=document.getElementById("c1").value
    var caja=document.getElementById("r2")
    var elementP = document.createElement('p');
   
    console.log("se ejecuta")
    re2=(c1/a1)
    if(re2>0)
    {
   
    elementP.textContent=""+re2
    caja.appendChild(elementP);
    }
    else
    {
    alert("No se poyi")
    }

})
console.log(convertpd)

var clean=document.getElementById("clean")

clean.addEventListener("click",function(even){
    even.preventDefault
    frm=document.getElementById("convertdp")
    frm2=document.getElementById("convertpd")
    frm.reset()
    frm2.reset()
})
var clean=document.getElementById("clean")

clean.addEventListener("click",function(even){
    even.preventDefault
    frm2=document.getElementById("convertpd")
    frm2.reset()
})
