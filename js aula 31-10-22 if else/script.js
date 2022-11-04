function media() {
    var nome = window.prompt('Qual o seu nome?')
    var nt1 = Number(window.prompt(`Qual foi a sua primeira nota ${nome}?`))
    var nt2 = Number(window.prompt(`Qual foi a sua segunda nota ${nome}?`))
    var med = (nt1 + nt2)/2

    var msg //cria uma variável e deixa ela vazia
    if (med >= 6) { // se por acaso a média for 6 ou mais o aluno será aprovado
        msg = `Meus Parabéns! Você foi aprovado.`
    }
    else { // caso não.../se não...
        msg = `Você não foi aprovado, estude um pouco mais.`
    } // o IF é uma estrutura que cria CONDIÇÃO, executa uma linha de comandos ou outra dependendo da condição

    var result = document.getElementById('situacao')
    result.innerHTML = `<p>Calculando a média de <mark>${nome}</mark>.</p>`
    result.innerHTML += `<p>As notas obtidas foram <mark>${nt1} e ${nt2}</mark>.</p>`
    result.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    result.innerHTML += `<p>A mensagem que temos é: <strong style='color:purple';>${msg}</strong></p>`
}