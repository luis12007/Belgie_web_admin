import React from 'react'
import { useNavigate } from 'react-router-dom';

/* Navigation bar component with all its buttons */
export default function ItemDB(props) {

    const navigate = useNavigate();
    const EnterHandler = () => { //Handler that sends the Home when clicking the button
        navigate("/Home");
    }

    return (
                <div className='flex  border justify-between' >
                    <div className='flex w-11/12 justify-between '>
                    <h1 className='pl-10'>Id</h1>
                    <h1>Nombre</h1>
                    <h1>Cantidad</h1>
                    <h1>Precio Individual</h1>
                    <h1>Precio de caja</h1>
                    <h1>Dia de cosdfsdfmpra</h1>
                    <h1>Caducidad</h1>
                    </div>
                    <div className='flex'>
                    <button className='px-3 py-1 rounded-lg text-cyan-50 bg-orange-300 mx-3' onClick={EnterHandler}>Editar</button>
                    <button className='px-3 py-1 rounded-lg text-cyan-50 bg-red-400 mx-3' onClick={EnterHandler}>Eliminar</button>
                    </div>
                </div>

    );
}