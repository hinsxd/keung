var open=false;
var home=true;

//menu
function toggleNav() {
    document.getElementById("sidebar").classList.toggle("hidden");
    open=true;
  }
  
function checknumber(id){
  if(document.getElementById(id).value<0||document.getElementById(id).value==""){
    document.getElementById(id).value=0;
  }
}


//game
function gameaddcart1(){
  document.getElementById('gamecart1').innerHTML="<div class='numberrow'><button class='addnumber' onclick='gameaddnumber1()'>+</button><input type='text' class='enternumber' id='gameproductnumber1' value=1 /><button class='minusnumber' onclick='gameminusnumber1()'>-</button></div>"
}
 
function gameaddnumber1(){
 document.getElementById('gameproductnumber1').value++;
}
function gameminusnumber1(){
 document.getElementById('gameproductnumber1').value--;
 if( document.getElementById('gameproductnumber1').value==0){
   document.getElementById('gamecart1').innerHTML=" <button class='addtocart' onclick='gameaddcart1()'>Add</button>"
 }
}

function gameaddcart2(){
  document.getElementById('gamecart2').innerHTML="<div class='numberrow'><button class='addnumber' onclick='gameaddnumber2()'>+</button><input type='text' class='enternumber' id='gameproductnumber2' value=1 /><button class='minusnumber' onclick='gameminusnumber2()'>-</button></div>"
}
 
function gameaddnumber2(){
 document.getElementById('gameproductnumber2').value++;
}
function gameminusnumber2(){
 document.getElementById('gameproductnumber2').value--;
 if( document.getElementById('gameproductnumber2').value==0){
   document.getElementById('gamecart2').innerHTML=" <button class='addtocart' onclick='gameaddcart2()'>Add</button>"
 }
}

 function gameaddcart3(){
   document.getElementById('gamecart3').innerHTML="<div class='numberrow'><button class='addnumber' onclick='gameaddnumber3()'>+</button><input type='text' class='enternumber' id='gameproductnumber3' value=1 /><button class='minusnumber' onclick='gameminusnumber3()'>-</button></div>"
 }
  
function gameaddnumber3(){
  document.getElementById('gameproductnumber3').value++;
}
function gameminusnumber3(){
  document.getElementById('gameproductnumber3').value--;
  if( document.getElementById('gameproductnumber3').value==0){
    document.getElementById('gamecart3').innerHTML=" <button class='addtocart' onclick='gameaddcart3()'>Add</button>"
  }
}

//film

function filmaddcart1(){
  document.getElementById('filmcart1').innerHTML="<div class='numberrow'><button class='addnumber' onclick='filmaddnumber1()'>+</button><input type='text' class='enternumber' id='filmproductnumber1' value=1 /><button class='minusnumber' onclick='filmminusnumber1()'>-</button></div>"
}
 
function filmaddnumber1(){
 document.getElementById('filmproductnumber1').value++;
}
function filmminusnumber1(){
 document.getElementById('filmproductnumber1').value--;
 if( document.getElementById('filmproductnumber1').value==0){
   document.getElementById('filmcart1').innerHTML=" <button class='addtocart' onclick='filmaddcart1()'>Add</button>"
 }
}

function filmaddcart2(){
  document.getElementById('filmcart2').innerHTML="<div class='numberrow'><button class='addnumber' onclick='filmaddnumber2()'>+</button><input type='text' class='enternumber' id='filmproductnumber2' value=1 /><button class='minusnumber' onclick='filmminusnumber2()'>-</button></div>"
}
 
function filmaddnumber2(){
 document.getElementById('filmproductnumber2').value++;
}
function filmminusnumber2(){
 document.getElementById('filmproductnumber2').value--;
 if( document.getElementById('filmproductnumber2').value==0){
   document.getElementById('filmcart2').innerHTML=" <button class='addtocart' onclick='filmaddcart2()'>Add</button>"
 }
}

 function filmaddcart3(){
   document.getElementById('filmcart3').innerHTML="<div class='numberrow'><button class='addnumber' onclick='filmaddnumber3()'>+</button><input type='text' class='enternumber' id='filmproductnumber3' value=1 /><button class='minusnumber' onclick='filmminusnumber3()'>-</button></div>"
 }
  
function filmaddnumber3(){
  document.getElementById('filmproductnumber3').value++;
}
function filmminusnumber3(){
  document.getElementById('filmproductnumber3').value--;
  if( document.getElementById('filmproductnumber3').value==0){
    document.getElementById('filmcart3').innerHTML=" <button class='addtocart' onclick='filmaddcart3()'>Add</button>"
  }
} 

//Food

function foodaddcart1(){
  document.getElementById('foodcart1').innerHTML="<div class='numberrow'><button class='addnumber' onclick='foodaddnumber1()'>+</button><input type='text' class='enternumber' id='foodproductnumber1' value=1 /><button class='minusnumber' onclick='foodminusnumber1()'>-</button></div>"
}
 
function foodaddnumber1(){
 document.getElementById('foodproductnumber1').value++;
}
function foodminusnumber1(){
 document.getElementById('foodproductnumber1').value--;
 if( document.getElementById('foodproductnumber1').value==0){
   document.getElementById('foodcart1').innerHTML=" <button class='addtocart' onclick='foodaddcart1()'>Add</button>"
 }
}

function foodaddcart2(){
  document.getElementById('foodcart2').innerHTML="<div class='numberrow'><button class='addnumber' onclick='foodaddnumber2()'>+</button><input type='text' class='enternumber' id='foodproductnumber2' value=1 /><button class='minusnumber' onclick='foodminusnumber2()'>-</button></div>"
}
 
function foodaddnumber2(){
 document.getElementById('foodproductnumber2').value++;
}
function foodminusnumber2(){
 document.getElementById('foodproductnumber2').value--;
 if( document.getElementById('foodproductnumber2').value==0){
   document.getElementById('foodcart2').innerHTML=" <button class='addtocart' onclick='foodaddcart2()'>Add</button>"
 }
}

 function foodaddcart3(){
   document.getElementById('foodcart3').innerHTML="<div class='numberrow'><button class='addnumber' onclick='foodaddnumber3()'>+</button><input type='text' class='enternumber' id='foodproductnumber3' value=1 /><button class='minusnumber' onclick='foodminusnumber3()'>-</button></div>"
 }
  
function foodaddnumber3(){
  document.getElementById('foodproductnumber3').value++;
}
function foodminusnumber3(){
  document.getElementById('foodproductnumber3').value--;
  if( document.getElementById('foodproductnumber3').value==0){
    document.getElementById('foodcart3').innerHTML=" <button class='addtocart' onclick='foodaddcart3()'>Add</button>"
  }
}

//Mobile

function mobileaddcart1(){
  document.getElementById('mobilecart1').innerHTML="<div class='numberrow'><button class='addnumber' onclick='mobileaddnumber1()'>+</button><input type='text' class='enternumber' id='mobileproductnumber1' value=1 /><button class='minusnumber' onclick='mobileminusnumber1()'>-</button></div>"
}
 
function mobileaddnumber1(){
 document.getElementById('mobileproductnumber1').value++;
}
function mobileminusnumber1(){
 document.getElementById('mobileproductnumber1').value--;
 if( document.getElementById('mobileproductnumber1').value==0){
   document.getElementById('mobilecart1').innerHTML=" <button class='addtocart' onclick='mobileaddcart1()'>Add</button>"
 }
}

function mobileaddcart2(){
  document.getElementById('mobilecart2').innerHTML="<div class='numberrow'><button class='addnumber' onclick='mobileaddnumber2()'>+</button><input type='text' class='enternumber' id='mobileproductnumber2' value=1 /><button class='minusnumber' onclick='mobileminusnumber2()'>-</button></div>"
}
 
function mobileaddnumber2(){
 document.getElementById('mobileproductnumber2').value++;
}
function mobileminusnumber2(){
 document.getElementById('mobileproductnumber2').value--;
 if( document.getElementById('mobileproductnumber2').value==0){
   document.getElementById('mobilecart2').innerHTML=" <button class='addtocart' onclick='mobileaddcart2()'>Add</button>"
 }
}

 function mobileaddcart3(){
   document.getElementById('mobilecart3').innerHTML="<div class='numberrow'><button class='addnumber' onclick='mobileaddnumber3()'>+</button><input type='text' class='enternumber' id='mobileproductnumber3' value=1 /><button class='minusnumber' onclick='mobileminusnumber3()'>-</button></div>"
 }
  
function mobileaddnumber3(){
  document.getElementById('mobileproductnumber3').value++;
}
function mobileminusnumber3(){
  document.getElementById('mobileproductnumber3').value--;
  if( document.getElementById('mobileproductnumber3').value==0){
    document.getElementById('mobilecart3').innerHTML=" <button class='addtocart' onclick='mobileaddcart3()'>Add</button>"
  }
}

//product
function productadd(id){
  document.getElementById(id).value++;
 }
 function productminus(id){
  document.getElementById(id).value--;
  if(document.getElementById(id).value<0){
    document.getElementById(id).value=0
  }
 }



 

  