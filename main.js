function saat() {
    let s = new Date().getHours()
    let d = new Date().getMinutes()
    let sn = new Date().getSeconds()
    if (s < 10 ) {
        s= "0"+s
    }
    if(d < 10){
        d= "0"+d
    }
    if(sn < 10){
        sn= "0"+d
    }
     let dsaat =    document.querySelector('.saat')

     dsaat.innerHTML = s + ":" + d + ":" + sn 
     setTimeout(saat,1000)
}

// Copyrigth  © GezegenDigital