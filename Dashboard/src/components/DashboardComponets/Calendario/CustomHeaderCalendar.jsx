import moment from 'moment';
import 'moment/locale/es';

const CustomHeaderCalendar = ({ children, value, date }) => {
    const today = moment();
    date = moment(date);
    const isToday = today.isSame(date, 'day');
    const className = isToday ? 'today' : 'other-day';

    // Configurar el idioma español para moment
    moment.locale('es');

    return (
        <div className={
            `h-[40px] 
            flex 
            items-center 
            justify-center
            text-zinc-700 
            text-xs 
            font-normal 
            font-Lato 
            leading-[18px]
            `
            } 
        >
            <div className='font-bold'>{date.format('dddd')}</div>
        </div>
    );
};

export default CustomHeaderCalendar;
