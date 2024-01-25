import React, { useState, useEffect } from "react";
import { arrowNext, arrowPrev } from "@/iconos/icons";

const dayNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const WeekView = ({selectedDate, handleEventstoShowByWeek, events}) => {

    const [currentDate, setCurrentDate] = useState(selectedDate);

    const filterEventsByWeek = () => {
        const { startOfWeek, endOfWeek } = daysInWeek();
        console.log(startOfWeek, "startOfWeek")
        console.log(endOfWeek, "endOfWeek")
        return events.filter((event) => {
            const eventStartDate = new Date(event.fechaInicio);
            const eventEndDate = new Date(event.fechaFinalizacion);
            console.log(eventStartDate, "startevent")
            console.log(eventEndDate, "endevent")

            // Filtrar eventos que comienzan antes del final de la semana y terminan después del inicio de la semana
            console.log(eventStartDate <= endOfWeek && eventEndDate >= startOfWeek, "OJOOOOOOOOOO")
            return eventStartDate <= endOfWeek && eventEndDate >= startOfWeek;
        });
    };

    useEffect(() => {
        setCurrentDate(selectedDate);
        filterEventsByWeek();
        handleEventstoShowByWeek();
    }, []);

    useEffect(() => {
        filterEventsByWeek();
        console.log(events, "Eventos");
    }, [currentDate]);

    const nextWeek = () => {
        setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7));
    };

    const prevWeek = () => {
        setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 7));
    };

    const daysInWeek = () => {
        const startOfWeek = currentDate.getDate() - currentDate.getDay() + 1;
        const endOfWeek = startOfWeek + 6;
        console.log(`daysInWeek ${startOfWeek} - ${endOfWeek}`)
        return { startOfWeek, endOfWeek };////
    };

    const firstDayOfWeek = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, currentDate.getDate() - currentDate.getDay() + 1).getDay();
        return firstDay === 0 ? 6 : firstDay - 1;
    };

    const hoursInDay = 24;

    const renderEventTitles = (day, hour) => {
        const hourSet = hour?.props?.children
        const hourSetDate = new Date(`2024-01-01T${hourSet}`);
        const hourSetHour = hourSetDate.getHours();


        const eventsAtHour = events.filter((event) => {
            const eventStartDate = new Date(event.fechaInicio);
            const eventEndDate = new Date(event.fechaFinalizacion);
          

            return (
                eventStartDate.getDate() === day  & 
                eventEndDate.getDate() >= day



                /* eventStartDate.getHours() <= hourSetHour &&
                eventEndDate.getHours() >= hourSetHour  */
            );
        });

        return eventsAtHour.map((event) => (
            <div key={event.id} className="event-title">
                {event.nombreEvento}
            </div>
        ));
    };

    const renderHoursColumn = () => {
        const hours = Array.from({ length: hoursInDay }, (_, i) => i);
        return hours.map((hour) => (
            <div
                key={`hour-${hour}`}
                className="w-[150.49px] h-[40px] flex items-center justify-center text-zinc-700 text-xs font-normal font-Lato leading-[18px]"
            >
                {`${hour}:00`}
            </div>
        ));
    };

    const renderDaysColumns = () => {
        const { startOfWeek, endOfWeek } = daysInWeek();
        const days = Array.from({ length: endOfWeek - startOfWeek + 1 }, (_, i) => i + startOfWeek);

        return (
            <>
                <div className={`flex flex-col w-full `}>
                    {renderHoursColumn().map((hour) => (
                        <div key={`hour-${hour.key}`} className={`flex items-center border justify-center text-zinc-700 text-xs font-normal font-Lato leading-[18px] w-full h-full hour-${hour.key}`}>
                            {hour}
                        </div>
                    ))}
                </div>

                {days.map((day) => (
                    <div key={`day-${day}`} className={`flex flex-col w-full day-${day}`}>

                        {renderHoursColumn().map((hour) => (
                            <div key={`day-${day}-hour-${hour.key}`} className={`flex items-center border justify-center text-zinc-700 text-xs font-normal font-Lato leading-[18px] w-full h-full day-${day}-hour-${hour.key}`}>
                                {renderEventTitles(day, hour)}
                                
                            </div>
                        ))}
                    </div>
                ))}
            </>
        )
    };

    return (
        <div className="bg-white w-[100%] mt-4 rounded-[10px] border overflow-hidden">
            <div className="flex items-center gap-4 w-full p-4 rounded-[10px]">
                <div className="ml-7 text-[#23254C] text-[24px] w-[200px] text-center font-semibold">
                    {`${currentDate.toLocaleString("default", { month: "long" }).charAt(0).toUpperCase()}${currentDate.toLocaleString("default", { month: "long" }).slice(1).toLowerCase()} ${currentDate.getFullYear()}`}
                </div>
                <div className="flex items-center justify-center gap-2">
                    <button className="border w-9 h-9 rounded-[4px] flex items-center justify-center" onClick={prevWeek}>
                        {arrowPrev}
                    </button>
                    <button className="border w-9 h-9 rounded-[4px] flex items-center justify-center" onClick={nextWeek}>
                        {arrowNext}
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-8 border border-x-transparent">
                <div className="w-[150.49px] h-[40px] flex items-center justify-center text-zinc-700 text-xs font-normal font-Lato leading-[18px]">
                    horas
                </div>

                {dayNames.map((day, index) => (
                    <div
                        className={`w-[150.49px] h-[40px] flex items-center justify-center text-zinc-700 text-xs font-normal font-Lato leading-[18px]`}
                        key={`day-${index}`}
                    >
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-8 ">

                {renderDaysColumns()}
            </div>
        </div>
    );
};

export default WeekView;
