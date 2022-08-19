
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

var logador
var chave

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function fazerLogin(){
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    
        if(
            document.getElementById("email").value === localStorage.logador && 
            document.getElementById("password").value === localStorage.chave) {
                window.open("logadinho.html")
        } else {
            alert("Else")
        }
    
    }
    
    function logOut(){
        const btn = document.querySelector(("button"))
    
        btn.addEventListener("click", function() {
        location.replace("index.html")
        
        });
       
    }

function cadastrar() {
    localStorage.setItem("logador",document.getElementById("email").value);
    localStorage.setItem("chave",document.getElementById("password").value);
}
