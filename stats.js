const OS = require('os');

setInterval(()=>{
    const { freemem, totalmem } = OS; //Desestruturacao 

    const total = parseInt(totalmem() / 1024 / 1024);
    const memoria = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((memoria / total) * 100);


    const stats = {
        total: `${total} MB`,
        free: `${memoria} MB`,
        usage: `${percents} %`
    }

    console.clear()
    console.table(stats)

}, 1000);
