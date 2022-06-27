let passwd = document.getElementById("password")

function verifyPassword(){
    if (length(passwd) < 6){
        alert("password too short!!")
    }
}


function verifyEmail(){
    if(input.value.length < 6){
        alert("email too short!!")
    }
}

let one1 = document.getElementById("email")
let two = document.getElementById("password")


one1.addEventListener("keyup", function(){
    
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(one1.value.match(regExp)){
        one1.style.border="1px solid green"
        
    }
    else{
        one1.style.border="1px solid red"
      
        return false
    }
})



two.addEventListener("keyup", function(){
 
    if(two.value.length == 0 || two.value.length < 6){
        two.style.border="1px solid red"
     
        return false
    }
    else{
        two.style.border="1px solid green"
      
    }
})