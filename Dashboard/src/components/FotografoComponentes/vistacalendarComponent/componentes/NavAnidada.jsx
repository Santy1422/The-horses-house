import React, { useState } from 'react';
import { useEffect } from 'react';

const NavAnidada = ({handleNavClick}) => {
  const [selectedNav, setSelectedNav] = useState('Listado');

  useEffect(() => {
    handleNavClick(selectedNav)
  }, [])

  return (
    <div className='mt-16 border-b-[1px]'>
      <ul style={{ display: 'flex', gap: '16px', listStyle: 'none', padding: 0 }}>
        <li
          style={{
            color: selectedNav === 'Listado' ? '#23254C' : '#80807F',
            fontSize: '14px',
            cursor: 'pointer',
            borderBottom: selectedNav === 'Listado' ? '2px solid #23254C' : 'none',
            paddingBottom: '9px',
          }}
          onClick={() => {
            setSelectedNav('Listado');
            handleNavClick('Listado');
          }}
            
        >
          Listado
        </li>
        <li
          style={{
            color: selectedNav === 'calendario' ? '#23254C' : '#80807F',
            fontSize: '14px',
            cursor: 'pointer',
            borderBottom: selectedNav === 'calendario' ? '2px solid #23254C' : 'none',
            paddingBottom: '9px',
          }}
          onClick={() => {
            setSelectedNav('calendario');
            handleNavClick('calendario');
          }}
        >
          Calendario
        </li>
        <li
          style={{
            color: selectedNav === 'misEventos' ? '#23254C' : '#80807F',
            fontSize: '14px',
            cursor: 'pointer',
            borderBottom: selectedNav === 'misEventos' ? '2px solid #23254C' : 'none',
            paddingBottom: '9px',
          }}
          onClick={() => {
            setSelectedNav('misEventos');
            handleNavClick('misEventos');
          }}
        >
          Mis eventos
        </li>
      </ul>
    </div>
  );
};

export default NavAnidada;
