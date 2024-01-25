import React, { useEffect } from "react";
import TablaCalendario from "./TablaCalendario";
import { useState } from "react";
import DateInput from "@/components/reusableComponents/DateInput";
import CalendarComponent from "./CalendarComponent";

const Calendario = ({ eventAllPublicados }) => {
  const currentDate = new Date()
  const [chosenDate, setChosenDate] = useState(currentDate);
  const [events, setEvents] = useState([])


  const handleDateChange = (fecha) => {
    console.log(chosenDate)
    //fecha.setDate(fecha.getDate() + 1); //sumo uno al dia para que sea la fecha correcta
    //setChosenDate(fecha)
  }
  
  return (
    <div className="w-[100%]" id="calendar">
        <CalendarComponent selectedDate={chosenDate} events={eventAllPublicados} />
    </div>
  );
};

export default Calendario;
