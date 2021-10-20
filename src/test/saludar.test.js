import '@testing-library/jest-dom';
import { concatenarSaludo } from '../domain/saludar';

describe('Debe mostrar saludo', () => {

    test( 'debe mostrar el saludo con la concatenacion del campo ingresado', () =>{
         const valorCampo = 'Jose';
         expect(concatenarSaludo({name: valorCampo})).toBe(`Hola Jose`);
    });
    
});
