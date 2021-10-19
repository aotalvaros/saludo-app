import React, { ChangeEvent, useState } from 'react'
import { concatenarSaludo } from '../domain/saludar'

export const Saludo = () => {

    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState('');

    const saludaBtn = () =>{
        setResultado(concatenarSaludo(input));
    };

    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {value} = target
        setInput(value);
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
