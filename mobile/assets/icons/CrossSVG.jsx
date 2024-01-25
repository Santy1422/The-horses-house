import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default CrossSVG = ({color, size, stroke}) => {
    const xml = `
        <svg xmlns="http://www.w3.org/2000/svg" width=${size} height=${size} viewBox="0 0 12 12" fill="none">
            <path d="M9 3L3 9M3 3L9 9" stroke=${color} stroke-width=${stroke ? stroke : "1.5"} stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    return (<SvgXml xml={xml} />) 
}