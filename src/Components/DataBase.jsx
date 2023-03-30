import React from 'react'
import ItemDB from './ItemDB'

/* Navigation bar component with all its buttons */
export default function DB(props) {
    return (
        <div className='border rounded-lg  h-full bg-gray-100 drop-shadow-md mt-3 mx-3 mb-10 flex justify-center items-center '>
            <div className='border w-full h-5/6  bg-white m-7'>
                <div className='flex justify-between' >
                <div className='flex w-11/12 justify-between'>
                    <h1 className='pl-10'>Id</h1>
                    <h1 className=''>Nombre</h1>
                    <h1 className=''>Cantidad</h1>
                    <h1 className=''>Precio Individual</h1>
                    <h1 className=''>Precio de caja</h1>
                    <h1 className=''>Dia de cosdfsdfmpra</h1>
                    <h1 className='pr-20'>Caducidad</h1>
                    
                    </div>

                </div>
                <ItemDB></ItemDB>
                <ItemDB></ItemDB>
                <ItemDB></ItemDB>
                <ItemDB></ItemDB>
                <ItemDB></ItemDB>
                <ItemDB></ItemDB>
            </div>
        </div>
    );
}