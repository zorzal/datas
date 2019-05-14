function calcular() {

    //LIMPA REGRAS DE FORMULÁRIO INVÁLIDO SEMPRE QUE A FUNÇÃO É CHAMADA
    document.getElementById('dataHelp').classList.add('invisible');
    document.getElementById('datafim').classList.remove('is-invalid'); 

    semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    console.log(document.getElementById("datainicio").value);

    var dataInicio = new Date(document.getElementById("datainicio").value);
    var dataFim = new Date(document.getElementById("datafim").value);
    var diffMilissegundos = dataFim - dataInicio;
    var diffSegundos = diffMilissegundos / 1000;
    var diffMinutos = diffSegundos / 60;
    var diffHoras = diffMinutos / 60;
    var diffDias = diffHoras / 24;
    var diffMeses = diffDias / 30; 

    //dataInicio = dataInicio.toLocaleDateString('pt-BR');

    //console.log(dataInicio.getTimeZoneOffset());

    //VERIFICA SE A DATA FINAL É MAIOR QUE DATA INICIAL
    if (diffMilissegundos < 0) {
        document.getElementById('dataHelp').classList.remove('invisible');
        document.getElementById('datafim').classList.add('is-invalid');    
    }else{
        document.getElementById('msgDataInicial').innerHTML = 'Data Inicial: '+ semana[dataInicio.getUTCDay()] + ', '+ dataInicio.getUTCDate() + ' de ' + mes[dataInicio.getUTCMonth()] + ' de '+ dataInicio.getUTCFullYear();
        document.getElementById('msgDataFinal').innerHTML = 'Data Final: '+ semana[dataFim.getUTCDay()] + ', '+ dataFim.getUTCDate() + ' de ' + mes[dataFim.getUTCMonth()] + ' de '+ dataFim.getUTCFullYear();
        document.getElementById('msg').innerHTML =  diffDias+' dias de diferença!';
    }

    console.log(semana[dataInicio.getDay()]); //Retona o dia da semana
    console.log(mes[dataInicio.getMonth()]); //Retona o mês
    console.log('Diferença em dias '+diffDias);
    console.log('Diferença em milesegundos '+diffMilissegundos);
}      


/*

// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
alert('Hoje é ' + str_data + ' às ' + str_hora + ' ' + dia_sem);



var data = new Date();
var dias = ['domingo','segunda','terça','quarta','quinta','sexta','sábado'];

alert('Hoje é ' + dias[data.getDay()]);

*/