import React from 'react';

export default function Header({titulo, subtitulo, totalItems }) {
    return(
        <header style = {{ padding: '20px', backgroundColor: '#242424', color: '#fff', 
            borderRadius: '8px', marginBottom: '20px'}}>
        {/*</header>*/}
            <h1>{titulo}</h1>
            <p style = {{color: '#aaa', fontStyle: 'italic' }}>{subtitulo}</p>
            <small>Elementos disponibles en tiempo real: <strong>{totalItems}</strong></small>
        </header>
    );
}