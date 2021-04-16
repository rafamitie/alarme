function alarme(tipo){
    console.log('oi')
    if (tipo=='elixir'){
        console.log('elixir')
        setInterval(() => {
            tocaAiDj(tipo)
        }, 900000);
    }
    if(tipo == 'perga'){
        console.log('perga')
        setInterval(() => {
            tocaAiDj(tipo)
        },3600000 );
    }
    if (tipo == 'perfume'){
        console.log('perfume')
        setInterval(() => {
            tocaAiDj(tipo)
        },1200000 );
    }
    
}
function tocaAiDj(tipo){
    if(tipo == 'elixir'){
        let songElixir = new Audio('bbc_marine-bug_07009138.mp3')
        songElixir.play()
    }else if (tipo == 'perga'){
        let songPerga = new Audio('bbc_cash-regis_07040192.mp3')
        songPerga.play()
    }else if (tipo == 'perfume'){
        let songPerf = new Audio('ai_papaizinho.mp3')
        songPerf.play()
    }

    console.log('ola')
}
