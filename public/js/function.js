let coins =200;
function rollDice()
{
    let random = getRandomNumber(1,6);
    if(document.getElementById("checkbox-1").checked==true)
      coins=coins-10;
     if(document.getElementById("checkbox-2").checked==true)
      coins=coins-10;
     if(document.getElementById("checkbox-3").checked==true)
      coins=coins-10;
     if(document.getElementById("checkbox-4").checked==true)
      coins=coins-10;
     if(document.getElementById("checkbox-5").checked==true)
      coins=coins-10;
      if(document.getElementById("checkbox-6").checked==true)
      coins=coins-10;
    console.log(coins);
}