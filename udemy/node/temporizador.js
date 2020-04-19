const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 0' ,  function (){
    console.log('Executando Tarefa 1!' , new Date().getSeconds())
})
//'*/5 * 19 * * 0' - executando a cada 5 segundos, ignorando o dia no mês(*), as 19 horas, qualquer mes(*), qualquer dia do mes(*), no domingo(0)

//cancela tarefa 1 apos 20 segundos
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Temporizador Tarefa1')
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0 , 5)] //0 é domingo, 1 é segunda... até 6 sábado.
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra , function() {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});