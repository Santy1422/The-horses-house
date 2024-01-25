import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 7.5L10 12.5L15 7.5" stroke="#74767A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

export default ChevronSVG = () => {
    return (<SvgXml xml={xml}  />) 
    }