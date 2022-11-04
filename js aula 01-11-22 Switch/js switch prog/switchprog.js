var comida = document.getElementById('comida')
var bebida = document.getElementById('bebida')
var acomp = document.getElementById('acomp')
var combo = document.getElementById('comboescolhido').innerHTML("Voce escolheu" + ${comida} + ", e" + ${acomp} + "para lanchar. Tenha uma boa refeicao!" )

switch (comida) {
    case 'Coxinha':
        document.write('Preco R$4,50')
        break
    case 'Pastel':
        document.write("Preco R$6,00")
        break
    case 'Hamburguer':
        document.write("Preco R$9,00")
        break
    case 'Cachorro-quente':
        document.write("Preco R$7,00")
        break
    default:
        document.write("Comida escolhida")
}

switch (bebida) {
    case 'Refrigerante':
        document.write('Preco R$4,00')
        break
    case 'Suco':
        document.write("Preco R$5,00")
        break
    case 'Água':
        document.write("Preco R$2,00")
        break
    case 'Água com gás':
        document.write("Preco R$3,00")
        break
    case 'Cerveja':
        document.write("Preco R$6,00")
        break
    default:
        document.write("Bebida escolhida")
}

switch (acomp) {
    case 'Batata frita':
        document.write('Preco R$8,00')
        break
    case 'Batata rústica':
        document.write("Preco R$9,00")
        break
    case 'Macaxeira frita':
        document.write("Preco R$8,00")
        break
    case 'Salada':
        document.write("Preco R$6,00")
        break
        case 'Nuggets':
        document.write("Preco R$7,00")
        break
    default:
        document.write("Acompanhamento escolhido")
}