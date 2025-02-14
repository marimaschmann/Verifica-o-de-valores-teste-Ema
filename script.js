function carregar() {
    var msg = document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = 'Bom dia, Ema!';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa tarde, Ema!';
    } else {
        msg.innerHTML = 'Boa noite, Ema!';
    }
}


function verificar (){
    var valor = document.getElementById('número').value;
    if (valor === "") {
        alert("Por favor, digite um número");
    } else if (valor > 4) {
        alert("Este valor é maior que a raiz quadrada de 16!");
    } else if (valor < 4) {
        alert("Este valor é menor que a raiz quadrada de 16!");
    } else if (valor == 4) 
    alert ('Este valor é igual a raiz quadrada de 16!')
}


