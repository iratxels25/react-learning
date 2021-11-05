import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Test on 05-funciones', () => {

    test('should return an user', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        
        expect( user ).toEqual( userTest );

    })


    test('should return an userActive', () => {
        const name = 'Iratxe';
        const userTest = {
            uid: 'ABC567',
            username: name
        }
        const user = getUsuarioActivo(name);
        
        expect( user ).toEqual( userTest );
    })
    
})
