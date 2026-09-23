const lowercasechars="abcdefghijklmnopqrstuvwxyz";
const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberchars="0123456789";
const symbolschars="!@#$%^&*()_+-~"
const result=document.getElementById("result");



function generatePass(){
    let allowedchars ="";
    let password="";
    let errors="";
    const passlength=document.getElementById("passlength").value;
    allowedchars+= Uppercase.checked ? uppercasechars:"";
    allowedchars+= Lowercase.checked ? lowercasechars:"";
    allowedchars+=Numbers.checked ? numberchars:"";
    allowedchars+=Symbols.checked ? symbolschars:"";
    
    if(passlength<=0){
        errors+="password length must be atleast 1<br>";
        
    }
    if(allowedchars.length ===0){
        errors+="At least 1 set of characters needs to be selected<br>";
        
    }
    if(errors!=""){
        result.innerHTML=errors;
        return;
    }
    for(let i=0;i<passlength;i++){
        const randomindex= Math.floor(Math.random() * allowedchars.length);
        
        password+= allowedchars[randomindex];
    }
    
    result.textContent=`${password}`;
}
