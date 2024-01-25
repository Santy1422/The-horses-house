import { puntosCampeonato } from "./puntosCampeonato";

// puntosCampeonato = (tiempo, tiempo2, faltas, faltas2, tiempoAcordadoR1, tiempoAcordadoR2)

export const ordenarPorDefincion = (inscriptos, definicion, tiempoAcordadoR1, tiempoAcordadoR2, tiempoOptimo) => {    
    
    if (definicion === 'TD') {
        // si es tiempo directo, primero ordena por faltas y despues por tiempo
        return inscriptos.sort((a, b) => {
            // Ordenar por faltas ascendente
            if ( (puntosCampeonato(a.tiempo, a.tiempo2, a.faltas, a.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) !== (puntosCampeonato(b.tiempo, b.tiempo2, b.faltas, b.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) ) {
                return ( (puntosCampeonato(a.tiempo, a.tiempo2, a.faltas, a.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) - (puntosCampeonato(b.tiempo, b.tiempo2, b.faltas, b.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) )              
            }
            
            // Si tienen las mismas faltas, ordenar por tiempo ascendente
            return a.tiempo - b.tiempo;
        })

    } else if (definicion === '2F Esp') {
        // si es dos fases especial, primero ordena por faltas y despues ordena por mejor tiempo de recorrido 2
        
        return inscriptos.sort((a, b) => {                        
            //ordena por faltas
            if ( (puntosCampeonato(a.tiempo, a.tiempo2, a.faltas, a.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) !== (puntosCampeonato(b.tiempo, b.tiempo2, b.faltas, b.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) ) {
                return ( (puntosCampeonato(a.tiempo, a.tiempo2, a.faltas, a.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) - (puntosCampeonato(b.tiempo, b.tiempo2, b.faltas, b.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) )              
            }
                
            //ordena por tiempo en recorrido 2
            return ((a.tiempo2 - tiempoAcordadoR2) ) - ((b.tiempo2 - tiempoAcordadoR2));
        })
    } else if (definicion === 'DR') {
        // si es doble recorrido, hay que preguntar, porque segun lo que vi en torneo aleman es igual a dos fases especial        
        return inscriptos.sort((a, b) => {                        
            //ordena por faltas
            if ( (puntosCampeonato(a.tiempo, a.tiempo2, a.faltas, a.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) !== (puntosCampeonato(b.tiempo, b.tiempo2, b.faltas, b.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) ) {
                return ( (puntosCampeonato(a.tiempo, a.tiempo2, a.faltas, a.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) - (puntosCampeonato(b.tiempo, b.tiempo2, b.faltas, b.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) )              
            }
                
            //ordena por tiempo en recorrido 2
            return ((a.tiempo2 - tiempoAcordadoR2) ) - ((b.tiempo2 - tiempoAcordadoR2));
        })  

    } else if (definicion === '1D') {
        // Divide los inscriptos en dos arrays: uno para el recorrido 1 y otro para el recorrido 2
        const recorrido1 = [];
        const recorrido2 = [];
        
        inscriptos.forEach((participante) => {
            if (participante.tiempo2 ) {
                recorrido2.push(participante);
            } else {
                recorrido1.push(participante);
            }
        });
    
        // Ordena cada array por faltas y tiempo

        const sortedRecorrido1 = recorrido1.sort((a, b) => {
            // Ordenar por faltas ascendente
            if ( a.faltas !==  b.faltas) {
                return  a.faltas - b.faltas              
            }
            
            // Si tienen las mismas faltas, ordenar por tiempo ascendente
            return a.tiempo - b.tiempo
        })
        
    
        const sortedRecorrido2 = recorrido2.sort((a, b) => {
            // Ordenar por faltas ascendente
            if ( a.faltas2 !==  b.faltas2) {
                return  a.faltas2 - b.faltas2              
            }
            
            // Si tienen las mismas faltas, ordenar por tiempo ascendente
            return a.tiempo2 - b.tiempo2
        })
    
        // Combina los dos arrays ordenados
        return sortedRecorrido2.concat(sortedRecorrido1)

    } else if (definicion === 'TOD') {
            
        return inscriptos.sort((a, b) => {
            // Ordenar por faltas ascendente
            if ( (puntosCampeonato(a.tiempo, a.tiempo2, a.faltas, a.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) !== (puntosCampeonato(b.tiempo, b.tiempo2, b.faltas, b.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) ) {
                return ( (puntosCampeonato(a.tiempo, a.tiempo2, a.faltas, a.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) - (puntosCampeonato(b.tiempo, b.tiempo2, b.faltas, b.faltas2, tiempoAcordadoR1, tiempoAcordadoR2 )) )              
            }
    
            // Si tienen las mismas faltas, calcular la diferencia absoluta con el tiempo óptimo
            const diferenciaA = Math.abs(a.tiempo - tiempoOptimo);
            const diferenciaB = Math.abs(b.tiempo - tiempoOptimo);
    
            // Ordenar por la diferencia absoluta ascendente
            return diferenciaA - diferenciaB;
        })

    } else {

        return inscriptos
    }
}
  