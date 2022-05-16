import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

//Hay que importar el context para decirle al hook useContext que contexto queremos que lea.
const C3 = () => {
    // Le pasamos que contexto queremos utilizar
    const themeData = useContext(ThemeContext);

    return (
        <>
            <p>Soy el componente C3</p>
           <p>En C3 el valor del theme es: {themeData.theme} </p> 
           <button onClick={themeData.handleCallback}>Volver a light mode</button>
        </>
    )
};

export default C3;