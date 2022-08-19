function fazerLogin(){
const logado = 'roberto@gmail.com';
const chave = 123456;
const email = document.querySelector("#email").value
const password = document.querySelector("#password").value

    if(email == logado) {
        if(password == chave){
            window.open("logadinho.html")
        } else {
            alert("Senha inválida")
        }
    } else {
        alert("Email Inválido")
    }
}

function logOut(){
    const btn = document.querySelector(("button"))

    btn.addEventListener("click", function() {
    location.replace("index.html")
    
    });
   
}

function alterarTela() {
    const btn = document.querySelector(("button"))

    btn.addEventListener("click", function() {
    location.replace("account.html")
    
    });
}

function alterarTela2() {
    
}

function criarConta() {
    
}