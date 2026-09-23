function rolldice(){
    const textbox=document.getElementById("numofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimg=document.getElementById("diceimg");
    values=[];
    images=[];


    for( let i =0;i<textbox;i++){
        const value=Math.floor(Math.random()*6)+1;
        console.log(value);
        values.push(value);
        console.log(values);
        images.push(`<img src="dice_images/${value}.png">`);
    }
    diceresult.textContent=` Dice : ${values.join(', ')}`;
    diceimg.innerHTML=images.join('');
}