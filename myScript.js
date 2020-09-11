  
  function myname(){
    var name = prompt("Enter your name to continue:");
   if(name === ""){
    document.getElementById("playername").innerHTML = "Player";
  }else{
    document.getElementById("playername").innerHTML = name;
  }
  
  }


  function myfun(){
  
  var randomNumber1=Math.floor((Math.random()*6)+1);
  var randomNumber2=Math.floor((Math.random()*6)+1);

  document.querySelectorAll("img")[0].setAttribute("src","images/dice" + randomNumber1 + ".png");
  document.querySelectorAll("img")[1].setAttribute("src","images/dice" + randomNumber2 + ".png");

  if ( randomNumber1 > randomNumber2 ) {
  	document.querySelector("h1").innerHTML = " Computer wins" ;
  }else if ( randomNumber2 > randomNumber1 ) {
  	document.querySelector("h1").innerHTML = document.getElementById("playername").textContent + " wins" ;
  }else{
  	document.querySelector("h1").innerHTML = " Wow!!!  Its a draw" ;
  }

}
