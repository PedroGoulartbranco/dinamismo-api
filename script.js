let lista_users = []
let lista_post = []

let id_escolhido_editar_post = 0

let div_users = document.getElementById("mostrar_users")
let div_post = document.getElementById("mostrar_post")
const modal_post = document.getElementById("janela-editar-post");
const modal_users = document.getElementById("janela-editar-users");

fetch('https://jsonplaceholder.typicode.com/posts?utm_source=chatgpt.com')

    .then(response => response.json())

    .then(data => {
         lista_post = data
        mostrarPost()
    })

    .catch(error => console.log(error));


fetch('https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com')

    .then(response => response.json())

    .then(data => {
        lista_users = data
        mostrarUsers()
    })

    .catch(error => console.log(error));

function mostrarPost() { //POST
    div_post.innerHTML = "";
    lista_post.forEach(usuario => {
    div_post.innerHTML += `
        <div class="post-card">
            <h3>${usuario.title} </h3>
            <p>ID: ${usuario.id}<br>ID Usuario: ${usuario.userId}<br>Descrição: ${usuario.body}</p>
            <button onclick="deletarPost(${usuario.id})">Deletar</button>
            <button onclick="editarPost(${usuario.id})">Editar</button>
        </div>
    `
});
}

function mostrarUsers() {
    div_users.innerHTML = ``
    lista_users.forEach(usuario => {
        div_users.innerHTML += `
            <div class="users-card">
                <h3>${usuario.name}</h3>
                <p><strong>Username:</strong> ${usuario.username}</p>
                <p><strong>E-mail:</strong> ${usuario.email}</p>
                <p><strong>Company:</strong> ${usuario.company.name}</p>
                <button onclick="deletarUsers(${usuario.id})">Deletar</button>
                <button onclick="editarUsers(${usuario.id})">Editar</button>
            </div>
        `;
    })
}

function deletarPost(id) {
    lista_post = lista_post.filter(post => post.id !== id);
    mostrarPost()
}

function deletarUsers(id) {
    lista_users = lista_users.filter(user => user.id !== id)
    mostrarUsers()
}

function editarPost(id) {
    const modal = document.getElementById("janela-editar-post");
    const spanId = document.getElementById("modal-id-post");
    
    modal.style.display = "block";
    
    spanId.innerText = id;
}

function editarUsers(id) {
    const modal = document.getElementById("janela-editar-users");
    const spanId = document.getElementById("modal-id-users");
    
    modal.style.display = "block";
    
    spanId.innerText = id;
}

function fechar_janela() {
    modal_post.style.display = "none"; 
    modal_users.style.display = "none"
}

function salvar_post() {
    const spanId = document.getElementById("modal-id-post");
    let titulo = document.getElementById("input-titulo");
    let descricao = document.getElementById("input-descricao");

    titulo = titulo.value
    descricao = descricao.value

    let post_atual = lista_post.find(post => post.id === parseInt(spanId.innerText));
    
    if (titulo != "") {
        console.log(`${titulo}`)
        post_atual.title = titulo
    }
    if (descricao != "") {
        post_atual.body = descricao
    }
    mostrarPost()
    fechar_janela()
}

function salvar_users() {
    const spanId = document.getElementById("modal-id-users");
    let nome = document.getElementById("input-nome");
    let nome_usuario = document.getElementById("input-nome_usuario");
    let email = document.getElementById("input-email");
    let empresa = document.getElementById("input-empresa")

    nome = nome.value
    email = email.value
    empresa = empresa.value
    nome_usuario = nome_usuario.value

    let users_atual = lista_users.find(usuario => usuario.id === parseInt(spanId.innerText));
    
    if (nome != "") {
        users_atual.name = nome
    }
    if (email != "") {
        users_atual.email = email
    }
    if (empresa != "") {
        users_atual.company.name = empresa
    }
    if (nome_usuario != "") {
        users_atual.username = nome_usuario
    }
    mostrarUsers()
    fechar_janela()
}