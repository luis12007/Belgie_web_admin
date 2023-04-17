import React from 'react'
import { useNavigate } from 'react-router-dom';
import Services from '../Services/UserServices';
import ItemsMod from './ModifyItem';

/* Navigation bar component with all its buttons */
export default function ItemDBCount(props) {
    const navigate = useNavigate();

    let dateObj = new Date(props.DiaCompra);
    let dateObjCad = new Date(props.Caducidad);

    let moth = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let date = dateObj.getDate();
    let mothCad = dateObjCad.getMonth() + 1;
    let yearCad = dateObjCad.getFullYear();
    let dateCad = dateObjCad.getDate();
    
    const NewDate = `${year}-${moth}-${date}`
    const NewDateCAD = `${yearCad}-${mothCad}-${dateCad}`

    
    


    const Edit = () => { //Handler that sends the Home when clicking the button
        localStorage.setItem("Nombre", props.Nombre)
        localStorage.setItem("Cantidad", props.Cantidad)
        localStorage.setItem("PrecioIndividual", props.PrecioIndividual)
        localStorage.setItem("DiaCompra", props.DiaCompra)
        localStorage.setItem("Caducidad", props.Caducidad)
        localStorage.setItem("PrecioCaja", props.PrecioCaja)
        localStorage.setItem("idinventario", props.idinventario)
        
        window.location.href = window.location.href;
    }

    const Delete = () => { //Handler that sends the Home when clicking the button
        Services.Delete(props.idinventario);
        window.location.href = window.location.href;
    }

    return (
                    <tr>
                    <td className='border'>{props.Nombre}</td>
                    <td className='border'>{props.Cantidad}</td>
                    </tr>

    );
}