import React, { useState } from 'react';
import { Navigate } from 'react-big-calendar';
import { arrowNext, arrowPrev } from '@/iconos/icons';
import esLocale from 'date-fns/locale/es'; // Asegúrate de tener este paquete instalado
import moment from 'moment';
import 'moment/locale/es';

const CustomToolbarCalendar = (toolbar) => {
    const irAtras = () => { toolbar.onNavigate(Navigate.PREVIOUS); };
    const irAdelante = () => { toolbar.onNavigate(Navigate.NEXT); };
    const irHoy = () => { toolbar.onNavigate(Navigate.TODAY); };
    moment.locale('es');

    const [vista, setVista] = useState('month');

    const cambiarVista = (nuevaVista) => {
        toolbar.onView(nuevaVista);
        setVista(nuevaVista);
    };

    const obtenerEstiloBoton = (vistaBoton) => {
        return vista === vistaBoton ? 'bg-zinc-100' : 'bg-white';
    };

    const calcularSemanas = () => {
        const fecha = new Date(toolbar.date);
        const primerDiaDelMes = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
        const diaDeLaSemana = primerDiaDelMes.getDay();
        const primerDiaDelMesAjustado = primerDiaDelMes.getDate() - diaDeLaSemana;
        const numeroDeSemana = Math.ceil((fecha.getDate() - primerDiaDelMesAjustado) / 7);

        return numeroDeSemana;
    };

    const obtenerEtiqueta = () => {
        const fecha = new Date(toolbar.date);
        const mes = fecha.toLocaleString('default', { month: 'long', locale: esLocale });
        const fechaES = moment(fecha).locale('es');
        const numeroDeSemana = calcularSemanas();
    
        const mesCapitalizado = fechaES.format('MMMM').charAt(0).toUpperCase() + fechaES.format('MMMM').slice(1);

        const labelCapitalizado = toolbar.label.charAt(0).toUpperCase() + toolbar.label.slice(1);
    
        return vista === 'week' ? `${mesCapitalizado} - Semana ${numeroDeSemana}` : labelCapitalizado;
    };
    

    return (
        <div className="flex flex-col w-full ">
            <div className="mb-1">
                <button 
                    className={`${obtenerEstiloBoton('day')} border h-11 w-[79px] rounded-l`} 
                    type="button" 
                    onClick={() => {
                        cambiarVista('day');
                        setVista('day');
                    }}
                >
                    <span className='text-indigo-950 text-sm font-bold font-Lato leading-tight'>Día</span>
                </button>
                <button 
                    className={`${obtenerEstiloBoton('week')} border-y h-11 w-[79px]`} 
                    type="button" 
                    onClick={() => {
                        cambiarVista('week');
                        setVista('week');
                    }}
                >
                    <span className='text-indigo-950 text-sm font-bold font-Lato leading-tight'>Semana</span>
                </button>
                <button  
                    className={`${obtenerEstiloBoton('month')}  border h-11 w-[79px] rounded-r`}
                    type="button" 
                    onClick={() => {
                        cambiarVista('month'); 
                        setVista('month');
                    }}
                >
                    <span className='text-indigo-950 text-sm font-bold font-Lato leading-tight'>Mes</span>
                </button>
            </div>

            <div className='flex flex-row items-center mt-1 p-5 bg-white justify-start'>
                <div className="ml-7 mr-3 text-[#23254C] text-[24px] w-fit-content text-start font-semibold ">
                    {obtenerEtiqueta()}
                </div>
                <div className="flex items-center justify-start gap-2">
                    <button className="border w-9 h-9 rounded-[4px] flex items-center justify-center" type="button" onClick={irAtras}>
                        {arrowPrev}
                    </button>
                  
                    <button className="border w-9 h-9 rounded-[4px] flex items-center justify-center" type="button" onClick={irAdelante}>
                        {arrowNext}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomToolbarCalendar;
