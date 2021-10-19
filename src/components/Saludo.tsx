import React, { ChangeEvent, useState } from 'react';
import { concatenarSaludo } from '../domain/saludar';

interface Iusuario {
    name: String
}

export const Saludo = () => {

    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState<Iusuario>();

    const saludaBtn = () =>{
        setResultado({name: concatenarSaludo(input)});
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

            {
                (resultado) &&  <p id='pMuestraSaludo'>{JSON.stringify(resultado.name)}</p>
            }

        </div>
    );
};
