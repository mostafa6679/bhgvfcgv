var gg =prompt ("هل طيزك كبيرة")
if(gg == "لا"){
document.getElementById("price").innerHTML = "كسمك";
}if(gg == "ايوة"){
    var ggo =prompt ("الساعة بكام")
}
if(ggo <= 100){
    document.getElementById("price").innerHTML = "خلصانة";
}
if(ggo > 100){
    document.getElementById("price").innerHTML = "احا يكسمك دي غالية";
}
