document.getElementById('gordura-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularGorduraCorporal();
});

function calcularGorduraCorporal() {
    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const circunferenciaCintura = parseFloat(document.getElementById('circunferenciaCintura').value);
    const circunferenciaPescoco = parseFloat(document.getElementById('circunferenciaPescoco').value);
    const circunferenciaQuadril = parseFloat(document.getElementById('circunferenciaQuadril').value);
    const atividade = parseInt(document.getElementById('atividade').value);
    let gorduraCorporal;

    if (sexo === 'masculino') {
        gorduraCorporal = 495 / (1.0324 - 0.19077 * Math.log10(circunferenciaCintura - circunferenciaPescoco) + 0.15456 * Math.log10(altura)) - 450;
    } else {
        gorduraCorporal = 495 / (1.29579 - 0.35004 * Math.log10(circunferenciaCintura + circunferenciaQuadril - circunferenciaPescoco) + 0.22100 * Math.log10(altura)) - 450;
    }

    let fatorAtividade;
    if (atividade <= 1) {
        fatorAtividade = 1.2;
    } else if (atividade <= 3) {
        fatorAtividade = 1.375;
    } else if (atividade <= 5) {
        fatorAtividade = 1.55;
    } else if (atividade <= 7) {
        fatorAtividade = 1.725;
    } else {
        fatorAtividade = 1.9;
    }

    const gorduraComAtividade = gorduraCorporal * fatorAtividade;
    document.getElementById('resultado').innerHTML = `
        Sua porcentagem de gordura corporal é ${gorduraCorporal.toFixed(2)}%.<br>
        Considerando seu nível de atividade física, sua gordura corporal ajustada é ${gorduraComAtividade.toFixed(2)}%.
    `;
}
