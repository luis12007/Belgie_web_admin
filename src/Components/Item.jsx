import React from 'react'
import { useNavigate } from 'react-router-dom';

/* Navigation bar component with all its buttons */
export default function Item(props) {

    const navigate = useNavigate();
    const EnterHandler = () => { //Handler that sends the Home when clicking the button
        navigate("/Home");
    }

    return (
        <div className='border rounded-lg  h-full bg-gray-100 drop-shadow-md mt-3 mx-3'>
            <div className='flex'>
                <div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Nombre
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' />
                    </div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Dia de compra
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' />
                    </div>
                </div>
                <div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Cantidad
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' />
                    </div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Caducidad
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' />
                    </div>
                </div>

                <div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Precio de caja
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' />
                    </div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Precio individual
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' />
                    </div>
                </div>

                <div className='absolute bottom-5 right-4'>
                <button className='border px-32 py-20 mx-10 rounded-lg text-cyan-50 text-2xl bg-sky-500' onClick={EnterHandler}>Agregar</button>
                <button className='border px-32 py-20 rounded-lg text-cyan-50 text-2xl bg-red-400' onClick={EnterHandler}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}