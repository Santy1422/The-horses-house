import * as Calendar from 'expo-calendar';
import { useState } from 'react';

const useCalendar = () => {
    const [calendario, setCalendario] = useState(false)

    // Función para solicitar permisos de calendario
    async function requestCalendarPermissions() {
        try{
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status !== 'granted') {
            // Manejar el caso cuando los permisos no son otorgados
            console.warn('Permisos de calendario no otorgados');
        }
    }catch(err){
        console.log(err)
    }
    }

    // Función para añadir un evento al calendario
    async function addToCalendar(evento) {
        try{
        const defaultCalendarSource =
            Platform.OS === 'ios'
                ? await getDefaultCalendarSource()
                : { isLocalAccount: true, name: 'Expo Calendar' };

        const newCalendarID = await Calendar.createCalendarAsync({
            title: 'Expo Calendar',
            color: 'blue',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });

        const event = {
            title: evento?.nombreEvento,
            startDate: new Date(evento.fechaInicio),
            endDate: new Date(evento.fechaFinalizacion),
            timeZone: 'GMT-4'
        };
        await Calendar.createEventAsync(newCalendarID.toString(), event);
        setCalendario(true)
    }catch(err){
        console.log(err)
    }
    }

    async function getDefaultCalendarSource() {
        try{
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
        return defaultCalendars.length ? defaultCalendars[0].source : null;
    }catch(err){
        console.log(err)
    }
    }
    return {
        addToCalendar,
        requestCalendarPermissions,
        getDefaultCalendarSource,
        calendario,
        setCalendario
    }
}
export default useCalendar