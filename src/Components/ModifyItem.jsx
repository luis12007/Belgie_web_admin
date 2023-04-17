import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Services from '../Services/UserServices';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Navigation bar component with all its buttons */
const ItemsMod = (props) => {
    const id = localStorage.getItem("TokenModify");
    const navigate = useNavigate();
    
    
    const NombreLocal = localStorage.getItem("Nombre");
    const PrecioIndividualLocal = localStorage.getItem("PrecioIndividual");
    const DiaCompraLocal = localStorage.getItem("DiaCompra");
    const CaducidadLocal = localStorage.getItem("Caducidad");
    const PrecioCajaLocal = localStorage.getItem("PrecioCaja");
    const idinventarioLocal = localStorage.getItem("idinventario");
    const CantidadLocal = localStorage.getItem("Cantidad");


    let dateObj = new Date(DiaCompraLocal);
    let dateObjCad = new Date(CaducidadLocal);

    let moth = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let date = dateObj.getDate();
    let mothCad = dateObjCad.getMonth() + 1;
    let yearCad = dateObjCad.getFullYear();
    let dateCad = dateObjCad.getDate();
    
    const NewDate = `${year}-${moth}-${date}`
    const NewDateCAD = `${yearCad}-${mothCad}-${dateCad}`
    const Newdatestring = NewDate.toString()
    const NewDateCadString = NewDateCAD.toString()

    const [Nombre, setNombre] = useState(NombreLocal);
    const [Cantidad, setCantidad] = useState(CantidadLocal);
    const [PrecioIndividual, setPrecioIndividual] = useState(PrecioIndividualLocal);
    const [DiaCompra, setDiaCompra] = useState(Newdatestring);
    const [Caducidad, setCaducidad] = useState(NewDateCadString);
    const [PrecioCaja, setPrecioCaja] = useState(PrecioCajaLocal);

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
        Services.Update(idinventarioLocal,Nombre,Cantidad,PrecioIndividual,PrecioCaja,DiaCompra,Caducidad); //espedando funcion login

            localStorage.removeItem("Nombre")
            localStorage.removeItem("Cantidad")
            localStorage.removeItem("PrecioIndividual")
            localStorage.removeItem("DiaCompra")
            localStorage.removeItem("Caducidad")
            localStorage.removeItem("PrecioCaja")
            localStorage.removeItem("idinventario")
            window.location.href = window.location.href;
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
                <button className='border px-32 py-20 mx-10 rounded-lg text-cyan-50 text-2xl bg-orange-300' onClick={EnterHandler}>Editar</button>
                <button className='border px-32 py-20 rounded-lg text-cyan-50 text-2xl bg-red-400' onClick={Exit}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ItemsMod;//exportando