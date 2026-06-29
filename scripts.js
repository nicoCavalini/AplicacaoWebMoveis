const botaoMenu = document.getElementById("botao-menu");
const listaMenu = document.getElementById("lista-menu");
const botaoTema = document.getElementById("botao-tema");
const formulario = document.getElementById("formulario-contato");
const mensagemRetorno = document.getElementById("mensagem-retorno");

botaoMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("ativo");
});

const linksMenu = document.querySelectorAll(".lista-menu a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        listaMenu.classList.remove("ativo");
    });
});

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {
        mensagemRetorno.textContent = "Por favor, preencha todos os campos.";
        mensagemRetorno.className = "mensagem-retorno erro";
        return;
    }

    if (!emailValido.test(email)) {
        mensagemRetorno.textContent = "Por favor, informe um e-mail válido.";
        mensagemRetorno.className = "mensagem-retorno erro";
        return;
    }

    mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
    mensagemRetorno.className = "mensagem-retorno sucesso";

    formulario.reset();
});