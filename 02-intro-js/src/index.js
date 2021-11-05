/* eslint-disable react-hooks/rules-of-hooks */
const persona = {
    nombre: 'Iratxe',
    edad: 29,
    clave: 'Mapatxe',
    rango: 'Soldado'
}

const useContext = ({nombre, edad, clave, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 24.6546, 
            lng: -21.31
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext( persona );
console.log(nombreClave, anios, lat, lng);

//Destructuración de arrays
const personajes = ['Iratxe', 'Unai', 'Kuma'];
const [ , , p3 ] = personajes;
console.log( p3 );

const getArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = getArray();
console.log(letters, numbers);

//Tarea
const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola mundo') } ]
}
const [nombre, setNombre] = useState( 'Kuma' );
console.log(nombre);
setNombre();
