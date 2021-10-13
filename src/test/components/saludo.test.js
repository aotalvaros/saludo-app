import { shallow } from 'enzyme';
import { Saludo } from '../../components/Saludo';
import { concatenarSaludo } from '../../domain/saludar';

jest.mock('../../domain/saludar', () => ({    
    concatenarSaludo: jest.fn(), 
}));

describe('Debe mostrar saludo', () => {
    
    let wrapper = shallow( <Saludo/> );
    beforeEach( () => {
        wrapper = shallow( <Saludo/> ); 
    })

    test('debe recibir un valor y mostrar el saludo', () => {
        const eventoNombre = { target: { value: 'Jose' } };
        wrapper.find('#inputOptieneValorCampo').prop('onChange')(eventoNombre);
        wrapper.find('#buttonMostrarSaludo').simulate('click');

        expect(concatenarSaludo).toBeCalledWith('Jose');
    });

    test('debe mostrar el saludo en un parrafo', () => {
        concatenarSaludo.mockReturnValue('Hola Jose');
        const eventoNombre = { target: { value: 'Jose' } };
        wrapper.find('#inputOptieneValorCampo').prop('onChange')(eventoNombre);
        wrapper.find('#buttonMostrarSaludo').simulate('click');

        const p = wrapper.find('#pMuestraSaludo');

        expect(p.text()).toBe('Hola Jose');
    })
    
    
})
