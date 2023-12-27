const container = document.getElementById('container');
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', ()=>
{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>
{
    container.classList.remove("active");
});

function salvar(){
    localStorage.info = document.getElementById("dado").value;
}

function carregar(){
    document.getElementById("dado").value = localStorage.info;
}

console.log(carregar);

