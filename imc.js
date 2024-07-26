document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularIMC();
});

function calcularIMC() {
    const sexo = document.getElementById('sexo').value;
    const altura = parseFloat(document.getElementById('altura').value) / 100;
    const peso = parseFloat(document.getElementById('peso').value);
    const imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = '';

    if (sexo === 'masculino') {
        if (imc < 20.7) {
            mensagem = 'Você está abaixo do peso. É importante procurar orientação de um profissional de saúde.';
        } else if (imc >= 20.7 && imc <= 26.4) {
            mensagem = 'Seu peso está normal. Continue mantendo uma alimentação balanceada e praticando exercícios físicos.';
        } else if (imc >= 26.4 && imc <= 27.8) {
            mensagem = 'Você está com sobrepeso. Considere adotar uma dieta equilibrada e aumentar a prática de atividades físicas.';
        } else if (imc >= 27.8 && imc <= 31.1) {
            mensagem = 'Você está com obesidade grau I. É recomendável procurar um profissional de saúde para orientação adequada.';
        } else if (imc >= 31.1 && imc <= 45.4) {
            mensagem = 'Você está com obesidade grau II. É altamente recomendável procurar um profissional de saúde.';
        } else {
            mensagem = 'Você está com obesidade grau III. Procure um profissional de saúde imediatamente.';
        }
    } else {
        if (imc < 19.1) {
            mensagem = 'Você está abaixo do peso. É importante procurar orientação de um profissional de saúde.';
        } else if (imc >= 19.1 && imc <= 25.8) {
            mensagem = 'Seu peso está normal. Continue mantendo uma alimentação balanceada e praticando exercícios físicos.';
        } else if (imc >= 25.8 && imc <= 27.3) {
            mensagem = 'Você está com sobrepeso. Considere adotar uma dieta equilibrada e aumentar a prática de atividades físicas.';
        } else if (imc >= 27.3 && imc <= 32.3) {
            mensagem = 'Você está com obesidade grau I. É recomendável procurar um profissional de saúde para orientação adequada.';
        } else if (imc >= 32.3 && imc <= 44.8) {
            mensagem = 'Você está com obesidade grau II. É altamente recomendável procurar um profissional de saúde.';
        } else {
            mensagem = 'Você está com obesidade grau III. Procure um profissional de saúde imediatamente.';
        }
    }

    document.getElementById('resultado').innerHTML = `Seu IMC é ${imc}. ${mensagem}`;
}
