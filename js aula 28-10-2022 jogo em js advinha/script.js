var rslt = document.querySelector(`section#result`)
var pc = 0
var player = 0

function sortear() {
    var min = 1
    var max = 100
    var dif = max - min
    var aleatorio = Math.random() //gera numeros aleatorios de um intervalo
    pc = min + Math.trunc(dif * aleatorio) //retorna a parte inteira de um numero, descartando os decimais
}

function jogar() {
    player = Number(window.prompt(`Qual é o seu palpite?`))
    if (player < pc) {
        rslt.innerHTML += `<p>Você falou ${player}. Meu número é <strong>MAIOR</strong>!`
    } else if (player > pc) {
        rslt.innerHTML += `<p>Você falou ${player}. Meu número é <strong>MENOR</strong>!`

    } else if (player == pc) {
        rslt.innerHTML += `<p><strong>MIZERAVI, ACERTOU!</strong> Como foi que tu soube que eu pensei justamente no ${pc}!</p>`
        document.getElementById(`botao`)
    }
}