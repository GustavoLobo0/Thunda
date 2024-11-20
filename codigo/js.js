const primeiroTier = document.querySelector(".tier-1");
const segundoTier = document.querySelector(".tier-2");
const terceiroTier = document.querySelector(".tier-3");
const resultado = document.querySelector(".aviaoResultadoTexto")
const tabela = document.querySelector(".tabela")
const motivo = document.querySelector(".motivo")
const textoEspecificaçoes = document.querySelector(".especificacoesTexto")
const imagemDoAviao = document.querySelector(".imagemDoAviao")

function piscarTabela() {
    tabela.classList.add("active");
    motivo.classList.add("active")
    setTimeout(() => {
        tabela.classList.remove("active");
        motivo.classList.remove("active")
    }, 150);
}


primeiroTier.addEventListener("click", () => {
    alterarContexto("contexto-1")
    imagemDoAviao.setAttribute("src", "./imagens/1.png")
});

segundoTier.addEventListener("click", () => {
    alterarContexto("contexto-2")
    imagemDoAviao.setAttribute("src", "./imagens/2.png")
});

terceiroTier.addEventListener("click", () => {
    alterarContexto("contexto-3")
    imagemDoAviao.setAttribute("src", "./imagens/3.png")
});

function alterarContexto (contexto){
    piscarTabela()
    resultadoPiscarCor()
    resultadoPiscarCorEspecificaçoes()

    switch (contexto) {
        case "contexto-1":
            textoEspecificaçoes.innerHTML = `Po mano é tier 1 so aviao ruim mais compra esse aqui que é sucesso ate voce ir pro tier 2`
            break;
        case "contexto-2":
            textoEspecificaçoes.innerHTML = `Ele é leve, tem muita agilidade, uma taxa de curva boa tmb kkkkkkkkkkkkk dps coloco os treco certim`
            break;
        case "contexto-3":
            textoEspecificaçoes.innerHTML = `vai amaçar todo mundo pq é rapido`
            break;
        default:
    };
    switch (contexto) {
        case "contexto-1":
            resultado.innerHTML = `<p class="aviaoResultadoTextoBorda">I-15 bis<p>

            `
            break;
        case "contexto-2":
            resultado.innerHTML = `<p class="aviaoResultadoTextoBorda">Yak-1<p>
            `
            break;
        case "contexto-3":
            resultado.innerHTML = `<p class="aviaoResultadoTextoBorda">Yak-9U<p>
            `
            break;
        default:
    }
}

function resultadoPiscarCor() {
    resultado.classList.add("active");
    setTimeout(() => {
        resultado.classList.remove("active");
    }, 100);
}

function resultadoPiscarCorEspecificaçoes() {
    textoEspecificaçoes.classList.add("active");
    setTimeout(() => {
        textoEspecificaçoes.classList.remove("active");
    }, 100);
}