function tabuada() {
    var n = document.getElementById('fnum').value
    var tab
    var tabuada = '';

    while (tab = 1, tab <= 10, tab++) {

        tabuada += n + " x " + tab + " = " +
            n * tab + "<br />";

        saida.innerHTML = tabuada;

    }
}