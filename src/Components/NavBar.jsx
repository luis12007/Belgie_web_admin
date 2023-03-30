import React from 'react'

import Home from '../Imgs/Home.png'
import Activity from '../Imgs/Activity.png'
import Exit from '../Imgs/Exit.png'
import BelgieLogo from '../Imgs/BelgieLogo.png'

/* Navigation bar component with all its buttons */
export default function NavBar(props) {
    return (
        <div className='border rounded-lg w-full h-full bg-gray-100 drop-shadow-md mt-3 mx-3 mb-10'>
            <div className='flex justify-center py-7 h-ful  rounded-t-lg bg-gray-100'>
            <img src={BelgieLogo} alt="BelgieLogo" className='w-24 ' />
            </div>
            <ul class="mt-auto p-2"> 
                <li className=''>
                    <a href="" className='flex'>
                            <img src={Home} className='w-7 h-7' alt="" />
                        <h1 className='pl-1 pt-1'>
                            Home
                        </h1>
                    </a>
                </li>
                <li className='py-5 pl-1'>
                    <a href="" className='flex'>
                            <img src={Activity} className='w-5 h-5 ' alt="" />
                        <h1 className='pl-2 pb-1'>
                            Inventario
                        </h1>
                    </a>
                </li>
                <div className=''>
                <li className='py-1 my-2 pl-10 border rounded-lg'>
                    <a href="" className='flex'>
                        <h2 className='pl-2 pb-1'>
                            - Agreagar
                        </h2>
                    </a>
                </li>
                <li className='py-1 my-2 pl-10 border rounded-lg'>
                    <a href="" className='flex'>
                        <h1 className='pl-2 pb-1'>
                            - Eliminar
                        </h1>
                    </a>
                </li>
                <li className='py-1 my-2 pl-10 border rounded-lg'>
                    <a href="" className='flex'>
                        <h1 className='pl-2 pb-1'>
                            - Buscar
                        </h1>
                    </a>
                </li>
                </div>
            </ul>
            <div class="mt-auto p-2 bottom-0 absolute ">
                <ul className='inset-x-0 bottom-0'>
                    <li>
                        <a href="" className='flex'>
                            <img src={Exit} alt="" className='w-6 h-7' />
                            <h5 className='pl-1 '>
                                Cerrar session
                            </h5>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}