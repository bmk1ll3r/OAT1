// Soma número //
const botao = document.getElementById('botao');

if (botao) {
    function somar(){
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        let soma = num1 + num2;
        let total = document.getElementById('result');
        total.value = soma;
    }
    botao.addEventListener('click', somar);
}

// Calculo idade //
const botaoIdade = document.getElementById('botaoIdade');

if (botaoIdade) {
    function idade(){
        let nascimento = document.getElementById('nascimento').value;
        let apenasAno = nascimento.split('-')[0];
        let idade = 2026 - parseInt(apenasAno);
        let total = document.getElementById('result');
        total.value = idade;
    }
    botaoIdade.addEventListener('click', idade);
}
// Conversor Dollar // 
const botaoDollar = document.getElementById('botaoDollar');

if(botaoDollar) {
    function dollar(){
        let reais = parseFloat(document.getElementById('reais').value);
        let converter = reais / 5.30;
        let total = document.getElementById('result');
        total.value = 'U$' + converter.toFixed(2);
    }
    botaoDollar.addEventListener('click', dollar)
}
// Conversor Celcius //
const botaoTemp = document.getElementById('botaoTemp')

if(botaoTemp){
    function celcius(){
    let fahrenheit = parseFloat(document.getElementById('fah').value)
    let converter = ((fahrenheit - 32) * 5) / 9
    let total = document.getElementById('result')
    total.value = converter.toFixed(2) + 'ºC' 
    } 
    botaoTemp.addEventListener('click', celcius)
}
// Calcular Impostos //
const botaoImposto = document.getElementById('botaoImposto')

if(botaoImposto){
    function taxa(){
        let valor = parseInt(document.getElementById('valor').value);
        let imposto = 60;
        let taxando = valor + (valor * imposto / 100);
        let total = document.getElementById('result');
        total.value = "R$" + taxando;
    }
    botaoImposto.addEventListener('click', taxa)
}
// Juros Simples //
const botaoJuros = document.getElementById('botaoJuros')

if(botaoJuros){
    function juros(){
        let valorIni = parseInt(document.getElementById('valorIni').value)
        let taxa = parseInt(document.getElementById('taxa').value) / 100
        let meses = parseInt(document.getElementById('meses').value)
        let jurosSimples = valorIni * taxa * meses
        let montante = valorIni + jurosSimples
        let total = document.getElementById('result')
        total.value = montante
    }
    botaoJuros.addEventListener('click', juros)
}
// Modo Norturno //
const botaoTema = document.getElementById('botaoTema');

if (botaoTema) {
    botaoTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            botaoTema.value = "☀️ Modo Claro";
            botaoTema.textContent = "☀️ Modo Claro";
        } else {
            botaoTema.value = "🌙 Modo Escuro";
            botaoTema.textContent = "🌙 Modo Escuro";
        }
    });
}