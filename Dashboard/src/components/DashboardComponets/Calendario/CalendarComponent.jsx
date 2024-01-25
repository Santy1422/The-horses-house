import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomToolbarCalendar from './CustomToolbarCalendar';
import CustomHeaderCalendar from './CustomHeaderCalendar';
import CustomHeaderWeekCalendar from './CustomHeaderWeekCalendar';
import { clubIcon, EventIconCalendar, EventIconClock, EventIconLocation } from '@/iconos/icons';
import 'moment/locale/es';


const localizer = momentLocalizer(moment);
const today = moment().startOf('day');


const EventComponent = ({ event }) => (
    <div className="flex flex-col">
        <div className={`flex justify-start items-center bg-white max-w-fit px-3 rounded-full font-bold font-Lato my-3 overflow-ellipsis ${event.state === 'Cancelado' ? 'text-red-500' : event.state === 'Pasado' ? 'text-bg-[#23254C]' : 'text-green-500'}`}>
            {event.state === 'Cancelado' ? 'Cancelado' : event.state === 'Pasado' ? 'Finalizado' : 'En Curso'}
        </div>
        <div className='my-1 flex flex-row flex-wrap justify-start items-center'>
            <div className='mr-3'>{clubIcon}</div>
            <div className='font-bold overflow-ellipsis'>{event.title}</div>
        </div>
        <ul className='ml-5 my-3'>
            <li className='flex flex-row text-sm text-wrap text-start my-1'><span className='mr-3'>{ EventIconClock }</span>{event?.initialRegistrationDate} - {event?.finalRegistrationDate}</li>
            <li className='flex flex-row text-sm text-wrap text-start my-1'><span className='mr-3'>{ EventIconCalendar }</span> {event.initialDate}</li>
            <li className='flex flex-row text-sm text-wrap text-start my-1'><span className='mr-3'>{ EventIconLocation }</span> {event.location }</li>
        </ul>
    </div>
);


const CalendarComponent = ({ events }) => {
    const [modalData, setModalData] = useState(null);
    const [eventsData, setEventsData] = useState(events);
    const [view, setView] = useState('month');
    moment.locale('es');

    useEffect(() => {
        console.log(eventsData, events, "Se actualizó la lista de eventos");

        if (events && events.length > 0) {
            setEventsData(events.map((event) => {
                // Verificar si la fecha tiene una hora específica
                const start = event?.fechaInicio ? new Date(event?.fechaInicio) : new Date();
                const end = event?.fechaFinalizacion ? new Date(event?.fechaFinalizacion) : new Date();

                // Establecer la hora predeterminada a las 6 am si no hay una hora específica
                start.setHours(6, 0, 0, 0);
                end.setHours(6, 0, 0, 0);

                return {
                    title: event?.nombreEvento,
                    start,
                    end,
                    description: event?.descripcionEvento,
                    state: event?.estado,
                    id: event?.id,
                    location: event?.ubicacion,
                    initialRegistrationDate: event?.fechaInicioInscripcion,
                    finalRegistrationDate: event?.fechaFinInscripcion,
                    sponsoringClubs: event?.clubesPatrocinadores,
                    initialDate: event?.fechaInicio,
                    finalDate: event?.fechaFinalizacion,
                };
            }));
        }
    }, [events]);

    const eventStyleGetter = (event, start, end, isSelected) => {
        const backgroundColor = event.state === "Cancelado" ? '#ff0000' : event.state === "Pasado" ? '#e9d8fd' : '#d1fae5';//#e9d8fd;
        const style = {
            display: 'flex',
            justifyContent:"flex-start",
            flexWrap: "wrap",
            alignItems: "center",
            borderRadius: "5px",
            border: "1px solid #ccc",            
            backgroundColor,
            borderRadius: '5px',
            opacity: 0.8,
            color: 'black',
            height: '200px',
            padding: '1rem',
            marginTop: '1rem',
            overflow: 'auto',
        };
    
        return {
            style
        };
    };
    

    console.log(moment().toDate())

    const handleEventClick = (event) => {
        // Abre un modal o realiza alguna acción al hacer clic en el evento
        setModalData(event);
    };

    return (
        <div>
            <Calendar
                className='h-full'
                localizer={localizer}
                events={eventsData}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 1000, padding: '1rem' }}
                culture="es"
                components={{
                    toolbar: CustomToolbarCalendar,
                    week: {
                        header: CustomHeaderWeekCalendar,
                    },
                    month: {
                        header: CustomHeaderCalendar,
                    },
                    event: EventComponent,
                }}
                eventPropGetter={eventStyleGetter}
                onSelectEvent={handleEventClick}
            />

            {/* Modal para mostrar detalles del evento */}
            {modalData && (
                <div className="fixed inset-0 overflow-y-auto bg-gray-800 bg-opacity-75 flex items-center justify-center z-30">
                    <div className="modal-container p-4 max-w-md mx-auto bg-white rounded shadow-lg text-left overflow-hidden">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold">{modalData.title}</h2>
                            <p className="text-gray-600">{modalData.description}</p>
                        </div>
                        <div className="mb-4">
                            <p><strong>Ubicación:</strong> {modalData.location}</p>
                            <p><strong>Estado:</strong> {modalData.state}</p>
                            {/* Agrega más información según sea necesario */}
                        </div>
                        <div className="flex justify-end">
                            <button className="text-blue-500" onClick={() => setModalData(null)}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CalendarComponent;
