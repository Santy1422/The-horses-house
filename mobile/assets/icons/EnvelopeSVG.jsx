import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32164 7.14167C5.51959 6.85889 5.90929 6.79011 6.19207 6.98806L10.0003 9.65384L13.8086 6.98806C14.0914 6.79011 14.4811 6.85889 14.679 7.14167C14.877 7.42445 14.8082 7.81415 14.5254 8.0121L10.3587 10.9288C10.1435 11.0794 9.85711 11.0794 9.64191 10.9288L5.47524 8.0121C5.19246 7.81415 5.12369 7.42445 5.32164 7.14167Z" fill="#939697"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33366 4.79175C2.75836 4.79175 2.29199 5.25812 2.29199 5.83341V14.1667C2.29199 14.742 2.75836 15.2084 3.33366 15.2084H16.667C17.2423 15.2084 17.7087 14.742 17.7087 14.1667V5.83341C17.7087 5.25812 17.2423 4.79175 16.667 4.79175H3.33366ZM1.04199 5.83341C1.04199 4.56776 2.06801 3.54175 3.33366 3.54175H16.667C17.9326 3.54175 18.9587 4.56776 18.9587 5.83341V14.1667C18.9587 15.4324 17.9326 16.4584 16.667 16.4584H3.33366C2.06801 16.4584 1.04199 15.4324 1.04199 14.1667V5.83341Z" fill="#939697"/>
        </svg>
`;

export default EnvelopeSVG = () => {
    return (<SvgXml xml={xml}  />) 
    }