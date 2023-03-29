import React from 'react';
import Form from '../Components/Form';
import LogInimg from '../Imgs/LogInImg.png';

export default function Login() {
    return (
        <div className='  w-screen h-screen flex justify-center items-center  rounded bg-gray-100'>
            <div className='border shadow-lg  bg-white rounded grid grid-cols-2 '>
                <div className='border col-start-1 col-end-1 '>
                    <img src={LogInimg} width="110%" height="100%" className=''></img>
                </div>
                <div className='col-start-2 col-end-2 flex justify-center items-center pl'>
                    <Form></Form>
                </div>
            </div>
        </div>
    );
}
