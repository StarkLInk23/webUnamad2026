import React from 'react';

export default function UserCard({nombre, email, compania}) {
    return(
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', 
        padding: '16px', margin: '10px', backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{color: '#333', margin: '0 0 8px 0'}}>{nombre}</h2>
            <p style={{color: '#333', margin: '0 0 8px 0'}}><strong>Email </strong>
            {email}</p>
            <p><strong>Empresa </strong>{compania}</p>
        </div>
    );
}