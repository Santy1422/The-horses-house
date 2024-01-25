

export const puntosCampeonato = (tiempo, tiempo2, faltas, faltas2, tiempoAcordadoR1, tiempoAcordadoR2) => {
    
    let faltasTiempo1 = 0
    let faltasTiempo2 = 0

    if (tiempo < tiempoAcordadoR1) {
        faltasTiempo1 = 0 
    } else {
        faltasTiempo1 =  Math.ceil(tiempo - tiempoAcordadoR1)
    }
    if (tiempo2 < tiempoAcordadoR2) {
        faltasTiempo2 = 0 
    } else {
        faltasTiempo2 = Math.ceil(tiempo2 - tiempoAcordadoR2)
    }
    
    return (faltas * 4) + (faltas2 * 4) + faltasTiempo1 + faltasTiempo2
}

