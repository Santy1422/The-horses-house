import * as React from 'react';
import { SvgXml } from 'react-native-svg';
export default GoogleSVG = () => {
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<g clip-path="url(#clip0_2327_8792)">
<path d="M24.5993 12.2763C24.5993 11.4605 24.5331 10.6404 24.392 9.83789H13.0732V14.4589H19.555C19.286 15.9492 18.4218 17.2676 17.1563 18.1054V21.1037H21.0233C23.2941 19.0137 24.5993 15.9272 24.5993 12.2763Z" fill="#4285F4"/>
<path d="M13.0731 24.0013C16.3096 24.0013 19.0389 22.9387 21.0275 21.1044L17.1606 18.106C16.0847 18.838 14.6957 19.2525 13.0775 19.2525C9.94689 19.2525 7.29247 17.1404 6.34006 14.3008H2.34961V17.3917C4.38672 21.4439 8.53591 24.0013 13.0731 24.0013Z" fill="#34A853"/>
<path d="M6.33578 14.3007C5.83312 12.8103 5.83312 11.1965 6.33578 9.70618V6.61523H2.34974C0.647742 10.006 0.647742 14.0009 2.34974 17.3916L6.33578 14.3007Z" fill="#FBBC04"/>
<path d="M13.0731 4.74966C14.7839 4.7232 16.4374 5.36697 17.6765 6.54867L21.1025 3.12262C18.9331 1.0855 16.0538 -0.034466 13.0731 0.000808666C8.5359 0.000808666 4.38672 2.55822 2.34961 6.61481L6.33565 9.70575C7.28365 6.86173 9.94248 4.74966 13.0731 4.74966Z" fill="#EA4335"/>
</g>
<defs>
<clipPath id="clip0_2327_8792">
<rect width="24" height="24" fill="white" transform="translate(0.833008)"/>
</clipPath>
</defs>
</svg>
`;

    return (<SvgXml xml={xml}  />) 
    }