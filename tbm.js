document.getElementById('tmb-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularTMB();
});

function calcularTMB() {
    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const atividade = parseFloat(document.getElementById('atividade').value);
    let tmb;

    if (sexo === 'masculino') {
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else {
        tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    }

    const tmbAtividade = tmb * atividade;
    const cuttingCalories = tmbAtividade - 500;
    const bulkingCalories = tmbAtividade + 500;

    document.getElementById('resultado').innerHTML = `
        Sua TMB é ${tmb.toFixed(2)} kcal/dia.<br>
        Considerando seu nível de atividade física, seu gasto calórico diário é ${tmbAtividade.toFixed(2)} kcal/dia.
        <h2>Recomendações de Consumo Calórico</h2>
        <table>
            <tr>
                <th>Objetivo</th>
                <th>Calorias Diárias</th>
            </tr>
            <tr>
                <td>Manter Peso</td>
                <td>${tmbAtividade.toFixed(2)} kcal</td>
            </tr>
            <tr>
                <td>Perder Peso (Cutting)</td>
                <td>${cuttingCalories.toFixed(2)} kcal</td>
            </tr>
            <tr>
                <td>Ganhar Peso (Bulking)</td>
                <td>${bulkingCalories.toFixed(2)} kcal</td>
            </tr>
        </table>
    `;
}
