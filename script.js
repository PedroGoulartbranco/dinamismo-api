let lista_users = []
let lista_post = []

let div_users = document.getElementById("mostrar_users")
let div_post = document.getElementById("mostrar_post")
const modal_post = document.getElementById("janela-editar-post");

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
    modal_post.style.display = "block"; 
    
    console.log("Editando o post:", idDoPost);
}

function fechar_janela() {
    modal_post.style.display = "none"; 
}

function salvar_post(id, titulo, descricao) {
    
}