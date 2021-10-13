import React, { useState } from 'react'
import { concatenarSaludo } from '../domain/saludar'

export const Saludo = () => {

    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState('');

    const saludaBtn = () =>{
        setResultado(concatenarSaludo(input));
    };

    const handleInputChange = (evento) => {
        setInput(evento.target.value);
    };

    return (
        <div>
            <input 
                id='inputOptieneValorCampo'
                onChange={handleInputChange}
                />
            <button 
                id='buttonMostrarSaludo'
                onClick={saludaBtn}
                >Saludar</button>

            <p id='pMuestraSaludo'>{resultado}</p>

        </div>
    );
};
