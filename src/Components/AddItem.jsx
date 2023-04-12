import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Services from '../Services/UserServices';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Navigation bar component with all its buttons */
export default function Item(props) {
    const navigate = useNavigate();
    const [Nombre, setNombre] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [PrecioIndividual, setPrecioIndividual] = useState('');
    const [DiaCompra, setDiaCompra] = useState('');
    const [Caducidad, setCaducidad] = useState('');
    const [PrecioCaja, setPrecioCaja] = useState('');

    const notify = () => toast.error("Usuario o contraseña incorrectos");
    const notifyEmpty = () => toast.error("Usuario o contraseña vacios");



    const onChange = (e, save) => {/* Para que no se recargue la pagina */
        save(e.target.value);
    }


    const EnterHandler = async (e) => {/* Cuando damos click al boton llamar a la funcion login */
        e.preventDefault(); //para que no se recargue
        if (Nombre === '' || Cantidad === '' || PrecioIndividual === '' || PrecioCaja === '' || DiaCompra === '' || Caducidad === ''){//Validacion si esta vacio
            notifyEmpty();
        }
        else {
        Services.PostFruit(Nombre,Cantidad,PrecioIndividual,PrecioCaja,DiaCompra,Caducidad); //espedando funcion login
            window.location.href = window.location.href;
                
                setNombre("");
                setCantidad("");
                setPrecioIndividual("");
                setPrecioCaja("");
                setDiaCompra("");
                setCaducidad(""); 
        }
    }

    const Exit = async (e) => {/* Cuando damos click al boton llamar a la funcion login */
    e.preventDefault();
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
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' 
                        value={Nombre}
                        onChange={(e) => onChange(e, setNombre)}/>
                    </div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Precio de caja
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' 
                        value={PrecioCaja}
                        onChange={(e) => onChange(e, setPrecioCaja)}/>
                    </div>
                </div>
                <div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Cantidad
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' 
                        value={Cantidad}
                        onChange={(e) => onChange(e, setCantidad)}/>
                    </div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                        Dia de compra
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' 
                        value={DiaCompra}
                        onChange={(e) => onChange(e, setDiaCompra)}/>
                    </div>
                </div>

                <div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                        Precio individual
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' 
                        value={PrecioIndividual}
                        onChange={(e) => onChange(e, setPrecioIndividual)}/>
                    </div>
                    <div className=' w-3/4 pl-2 py-5 '>
                        <h1 className='text-gray-400 font-semibold pb-2'>
                            Caducidad 
                        </h1>
                        <input type="text" className='bg-neutral-200 rounded-lg py-1 ' id='' placeholder='' 
                        value={Caducidad}
                        onChange={(e) => onChange(e, setCaducidad)}/>
                    </div>
                </div>

                <div className='absolute bottom-5 right-4'>
                <button className='border px-32 py-20 mx-10 rounded-lg text-cyan-50 text-2xl bg-sky-500' onClick={EnterHandler}>Agregar</button>
                <button className='border px-32 py-20 rounded-lg text-cyan-50 text-2xl bg-red-400' onClick={Exit}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}