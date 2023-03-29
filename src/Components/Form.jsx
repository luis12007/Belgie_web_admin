import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();
    const EnterHandler = () => { //Handler that sends the Home when clicking the button
        navigate("/Home");
    }
    return (
        <div className='border shadow-lg  bg-white rounded flex-row  w-5/6'>
            <div class=' place-items-center py-10 '>
            <h1 class='flex justify-center font-bold text-sky-500'>
                BelgieSV Administracion
            </h1>
            <p class='flex justify-center'>Sistema de inventario de waffles</p>
            </div>
            <div className=' w-3/4 pl-32 py-5 '>
            <h1 className='text-gray-400 font-semibold '>
                Usuario
            </h1>
            <input type="text" className='bg-neutral-200 rounded-lg w-full py-2 ' id='' placeholder=''/>
            </div>
            <div className=' w-3/4 pl-32 py-5 '>
            <h1 className='text-gray-400 font-semibold '>
                Contraseña
            </h1>
            <input type="text" className='bg-neutral-200 rounded-lg w-full py-2 ' id='' placeholder=''/>
            </div>
            <div className='flex justify-center py-5'>
                <button className='border px-8 py-3 rounded-full text-cyan-50 bg-sky-500' >Ingresar</button>
            </div>
            <div className='flex justify-center pb-10'>
            <p className=''>Tienes problemas llama a soporte</p>
            <a href="" className='ml-2 text-sky-500 underline-offset-2'> Mysoft soporte tecnico</a>
            </div>
        </div>
    );
}