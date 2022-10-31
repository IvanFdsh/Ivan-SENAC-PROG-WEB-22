var idade = prompt("qual é a sua idade?");

if (idade < 16) {
    window.alert('Não vota');
} else {
    if (idade < 18 || idade > 65) {
        window.alert('Voto opcional');
    } else {
        window.alert('Voto obrigatório');
    }
}
