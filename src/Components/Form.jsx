import React from 'react';
import { useEffect, useState } from "react";
import Services from '../Services/UserServices';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState(false);
    const notify = () => toast.error("Usuario o contraseña incorrectos");
    const notifyEmpty = () => toast.error("Usuario o contraseña vacios");


    const onChange = (e, save) => {/* Para que no se recargue la pagina */
        save(e.target.value);
    }

    const onClickHandler = async (e) => {/* Cuando damos click al boton llamar a la funcion login */
        e.preventDefault(); //para que no se recargue
        if (username === '' || password === '') {//Validacion si esta vacio
            notifyEmpty();
        }
        else {
            const Token = await Services.LoginBelgie(username, password);
            localStorage.setItem("Token", Token.token); //espedando funcion login

            if (username === 'Belgiesv' || password === 'Churros2023') {
                navigate("/Home");
            } else {
                notify();
            }

            setUsername("");
            setPassword("");
        }


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
                <input type="text" className='bg-neutral-200 rounded-lg w-full py-2' placeholder=''
                    value={username}
                    onChange={(e) => onChange(e, setUsername)} />
            </div>
            <div className=' w-3/4 pl-32 py-5 '>
                <h1 className='text-gray-400 font-semibold '>
                    Contraseña
                </h1>
                <input type="password" className='bg-neutral-200 rounded-lg w-full py-2' placeholder=''
                    value={password}
                    onChange={(e) => onChange(e, setPassword)} />
            </div>
            <form action="">
                <div className='flex justify-center py-5'>
                    <button className='border px-8 py-3 rounded-full text-cyan-50 bg-sky-500' onClick={onClickHandler} >Ingresar</button>
                </div>
            </form >
            <div className='flex justify-center pb-10'>
                <p className=''>Tienes problemas llama a soporte</p>
                <a href="https://wa.link/a7imkk" className='ml-2 text-sky-500 underline-offset-2'> Mysoft soporte tecnico</a>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}