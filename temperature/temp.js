const textbox=document.getElementById("textbox");
const ctof =document.getElementById("ctof");
const ftoc =document.getElementById("ftoc");
const ctok =document.getElementById("ctok");
const ktoc =document.getElementById("ktoc");
const result =document.getElementById("result");
const yavda=document.getElementById("yavda");
let temp;


ctof.addEventListener("change",function(){
    yavda.textContent="°C";

});
ftoc.addEventListener("change",function(){
    yavda.textContent="°F";
});
ctok.addEventListener("change",function(){
    yavda.textContent="°C";
});
ktoc.addEventListener("change",function(){
    yavda.textContent="°K";
});
function convert(){
    event.preventDefault();
    if(ctof.checked){
        temp=Number(textbox.value);
        temp=temp *9/5 +32;
        result.textContent=temp.toFixed(2) +  "°F";
    }
    else if(ftoc.checked){
        temp=Number(textbox.value);
        temp=(temp-32)* 5/9;
        result.textContent=temp.toFixed(2) +  "°C";
    }
    else if(ctok.checked){
        temp=Number(textbox.value);
        temp=temp+273.15;
        result.textContent=temp.toFixed(2) +  "°K";
    }
    else if(ktoc.checked){
        temp=Number(textbox.value);
        temp=temp-273.15;
        result.textContent=temp.toFixed(2) +  "°C";
    }

    else{
        result.textContent = "Select a unit nigaaa";
        yavda.textContent="";
    }

}