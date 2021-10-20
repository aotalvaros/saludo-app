import React, { ChangeEvent, useState } from 'react';
import { concatenarSaludo } from '../domain/saludar';
import { Iusuario } from '../interface/components/Iusuario';



export const Saludo = () => {

    const [input, setInput] = useState<Iusuario>({ name:'' });
    const [resultado, setResultado] = useState<Iusuario>();

    const saludaBtn = () =>{
        setResultado({ name: concatenarSaludo({name: input.name}) });
    };

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target
        setInput({ name: value });
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
