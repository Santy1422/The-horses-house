import { useState } from "react";
import { ordenarPorDefincion } from "./ordenarPorDefinicion";
import { puntosCampeonato } from "./puntosCampeonato";

const Results = ({ pruebas }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    
    return (
        <div className="eventosContenedor h-full flex flex-col items-center w-full justify-between">
        <div className="eventos flex flex-col w-full overflow-y-scroll min-h-[450px]">
        {pruebas?.map((prueba) => {
            
            const inscriptosOrdenados = ordenarPorDefincion([...prueba.inscriptos], prueba.definicion, prueba.tiempoAcordadoR1, prueba.tiempoAcordadoR2, prueba.tiempoOptimo)
  
            return (
                <div key={prueba.id} className="contenedorPrueba flex flex-col px-5 py-5">
                    <div className="tituloPrueba flex items-center gap-x-2 pb-2 hover:cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>
                        <div>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                <g id="angle-right">
                                    <path id="angle-right_2" d="M8.00154 3.33342C7.7882 3.33342 7.57484 3.41506 7.41234 3.57756C7.08651 3.9034 7.08651 4.43012 7.41234 4.75595L12.6565 10.0001L7.41234 15.2442C7.08651 15.5701 7.08651 16.0968 7.41234 16.4226C7.73818 16.7485 8.2649 16.7485 8.59073 16.4226L14.4241 10.5893C14.7499 10.2635 14.7499 9.73673 14.4241 9.4109L8.59073 3.57756C8.42823 3.41506 8.21487 3.33342 8.00154 3.33342Z" fill="#23254C"/>
                                </g>
                            </svg>
                        </div>
                        
                        <svg width="21" height="20"  viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="award">
                                <path id="award_2" d="M17.0838 5.31907L16.7553 4.9929C16.6915 4.92828 16.6546 4.84216 16.6546 4.75087V4.29136C16.6546 2.64305 15.308 1.30138 13.6537 1.30138H13.1925C13.1019 1.30138 13.0133 1.26441 12.9495 1.20184L12.6222 0.874672C11.4538 -0.290531 9.5503 -0.292583 8.37776 0.874672L8.05053 1.20084C7.9867 1.26443 7.89808 1.30138 7.80749 1.30138H7.3463C5.69198 1.30138 4.34542 2.64305 4.34542 4.29136V4.75087C4.34542 4.84216 4.30949 4.9283 4.24464 4.9919L3.91615 5.32007C2.7467 6.48527 2.7467 8.38288 3.91615 9.54911L4.24464 9.87527C4.30847 9.93989 4.34542 10.026 4.34542 10.1173V10.5768C4.34542 11.8333 5.12884 12.9062 6.23241 13.3483L4.61007 19.0184C4.52978 19.3004 4.61725 19.6041 4.83652 19.801C5.05374 19.997 5.36566 20.0534 5.64053 19.9437L8.49011 18.8061C9.78721 18.2912 11.2138 18.2912 12.5089 18.8061L15.3605 19.9447C15.4541 19.9816 15.552 20 15.6477 20C15.8361 20 16.0203 19.9323 16.1645 19.802C16.3837 19.6051 16.4712 19.3026 16.3909 19.0195L14.7686 13.3493C15.8721 12.9072 16.6556 11.8343 16.6556 10.5778V10.1183C16.6556 10.027 16.6915 9.94087 16.7563 9.87728L17.0848 9.55011C17.0848 9.55011 17.0848 9.55013 17.0848 9.54911C18.2533 8.38288 18.2533 6.4853 17.0838 5.31907ZM13.0814 17.3763C11.4188 16.7157 9.58533 16.7147 7.91556 17.3763L6.52571 17.9312L7.77457 13.5668H7.80548C7.89607 13.5668 7.98444 13.6038 8.04827 13.6663L8.37575 13.9935C8.96048 14.5761 9.72846 14.8685 10.4985 14.8685C11.2664 14.8685 12.0355 14.5771 12.6212 13.9935L12.9484 13.6673C13.0123 13.6037 13.1009 13.5668 13.1915 13.5668H13.2224L14.471 17.9312L13.0814 17.3763ZM15.9926 8.4608L15.6643 8.78796C15.3071 9.14286 15.1114 9.61573 15.1114 10.1173V10.5768C15.1114 11.3769 14.4577 12.0282 13.6547 12.0282H13.1935C12.6963 12.0282 12.2095 12.2292 11.8584 12.58L11.5309 12.9062C10.9802 13.4539 10.0208 13.4539 9.47004 12.9062L9.14256 12.579C8.79152 12.2293 8.30575 12.0282 7.80749 12.0282H7.3463C6.54333 12.0282 5.88959 11.3769 5.88959 10.5768V10.1173C5.88959 9.61471 5.69414 9.14288 5.33692 8.78696L5.00843 8.4608C4.44121 7.89461 4.44121 6.97254 5.00843 6.40738L5.33692 6.08021C5.69414 5.72532 5.88959 5.25244 5.88959 4.75087V4.29136C5.88959 3.49131 6.54333 2.83994 7.3463 2.83994H7.80749C8.30472 2.83994 8.79152 2.63894 9.14256 2.28815L9.47004 1.96198C10.0208 1.41425 10.9802 1.41425 11.5309 1.96198L11.8584 2.28915C12.2095 2.63892 12.6952 2.83994 13.1935 2.83994H13.6547C14.4577 2.83994 15.1114 3.49131 15.1114 4.29136V4.75087C15.1114 5.25347 15.3071 5.72529 15.6643 6.08121L15.9926 6.40738C16.5598 6.97357 16.5598 7.89461 15.9926 8.4608ZM10.4995 4.10054C8.65472 4.10054 7.15378 5.59602 7.15378 7.43409C7.15378 9.27215 8.65472 10.7676 10.4995 10.7676C12.3443 10.7676 13.8452 9.27215 13.8452 7.43409C13.8452 5.59602 12.3443 4.10054 10.4995 4.10054ZM10.4995 9.22907C9.50607 9.22907 8.69795 8.42389 8.69795 7.43409C8.69795 6.44428 9.50607 5.6391 10.4995 5.6391C11.4929 5.6391 12.301 6.44428 12.301 7.43409C12.301 8.42389 11.4929 9.22907 10.4995 9.22907Z" fill="#BEBDBD"/>
                            </g>
                        </svg>
                        <div className="tituloPruebaTexto flex flex-row items-baseline">
                            <div className="text-indigo-950 text-base font-bold font-primary  mr-2 ">{`Prueba ${prueba.nombre}`}</div>                    
                            <div className="text-indigo-950 text-sm font-normal font-primary mr-2 ">{`${prueba.categoria} - ${prueba.altura}`}</div>                    
                            <div className="text-indigo-950 text-sm font-normal font-primary  ">{`definicion: ${prueba.definicion}`}</div>                    
                        </div>
                    </div>
                    
                    {isOpen && 
                        <table className="w-full border-collapse mt-2">
                            <thead>
                                <tr className="bg-blue-200 font-primary">
                                    <th className="p-2 text-left">Posicion</th>
                                    <th className="p-2 text-left">Nombre</th>
                                    <th className="p-2 text-left">Caballo</th>
                                    <th className="p-2 text-left">Club</th>
                                    <th className="p-2 text-left">Faltas R1</th>
                                    <th className="p-2 text-left">Tiempo R1</th>
                                    <th className="p-2 text-left">Faltas R2</th>
                                    <th className="p-2 text-left">Tiempo R2</th>
                                    <th className="p-2 text-left">Puntos campeonato</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inscriptosOrdenados.map((inscripto, index) => (
                                    <tr className="bg-white border-t font-primary text-sm" key={index}>
                                        <td className="p-2">{index + 1}</td>
                                        <td className="p-2">{inscripto.Jinete}</td>
                                        <td className="p-2">{inscripto.nombreDelCaballo}</td>
                                        <td className="p-2">{inscripto.clubRepresenta}</td>
                                        <td className="p-2 text-center">{inscripto.faltas}</td>
                                        <td className="p-2 text-center">{inscripto.tiempo}</td>
                                        <td className="p-2 text-center">{inscripto.faltas2}</td>
                                        <td className="p-2 text-center">{inscripto.tiempo2}</td>
                                        <td className="p-2 text-center">{puntosCampeonato(inscripto.tiempo, inscripto.tiempo2, inscripto.faltas, inscripto.faltas2, prueba.tiempoAcordadoR1, prueba.tiempoAcordadoR2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>                                        
                    }
                </div>
            )
        })}
        </div>
        </div>
    )
}
  
export default Results;
  