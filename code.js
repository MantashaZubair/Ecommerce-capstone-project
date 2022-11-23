//for login js code
var attempt=3
function login(){
  var email= document.getElementById("email")
var password=document.getElementById("password")
if(email.value==""){
      alert("please enter your email(for this: admin@admin.com)")
}else if(password.value==""){
  alert("please enter your login password(for this: 12345)")
}
else if(email.value==="admin@admin.com" && password.value==="12345"){
      alert("login successfull")
      window.location="cart.html";
  }else{
      
    attempt--
    alert(`you have ${attempt} attempt left`)
    if(attempt==0){
          alert("you have only 3 attempt")
          email.value=""
          password.value=""
    }  
  }
}


//for cart(incerament or decreament) js code


function product(){
var product_total_amount=document.getElementById("product_total_amount");
var shipping_charge=document.getElementById("shipping_charge");
var total_cart_amt=document.getElementById("total_cart_amt");
return product;
}

function decreaseNumber(incdec,itemprice){
  product()
  var itemvalue = document.getElementById(incdec);
  var itemprice=document.getElementById(itemprice)
  if(itemvalue.value <= 0){
    itemvalue.value=0;
    alert("negative quantity is not allowed");
  }else{
    itemvalue.value=parseInt(itemvalue.value)-1;
    itemvalue.style.background="#fff";
    itemvalue.style.color="#000";
    itemprice.innerHTML=parseInt(itemprice.innerHTML)-15
    product_total_amount.innerHTML=parseInt(product_total_amount.innerHTML)-15
    total_cart_amt.innerHTML=parseInt(product_total_amount.innerHTML)+parseInt(shipping_charge.innerHTML)
    if(product_total_amount.innerHTML==0){
        total_cart_amt.innerHTML="0"
    }
  }
}
function increaseNumber(incdec,itemprice){
product()
  var itemvalue = document.getElementById(incdec);
  var itemprice=document.getElementById(itemprice)
  if(itemvalue.value >= 5){
    itemvalue.value=5;
    alert("max 5 allowed");
    itemvalue.style.background="red";
    itemvalue.style.color="#fff";
  }else{
    itemvalue.value=parseInt(itemvalue.value)+1
    itemprice.innerHTML=parseInt(itemprice.innerHTML)+15
    product_total_amount.innerHTML=parseInt(product_total_amount.innerHTML)+15;
    total_cart_amt.innerHTML=parseInt(product_total_amount.innerHTML)+parseInt(shipping_charge.innerHTML)
    
  }
}
