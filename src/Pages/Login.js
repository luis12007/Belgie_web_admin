import React from 'react';
import Form from '../Components/Form';
import LogInimg from '../Imgs/LogInImg.png';

export default function Login() {
    return (
        <div className='container mt-5 border shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='row'>
                <div className='col'>
                    <Form></Form>
                </div>
                <div className='col'>
                    <div >
                        <img src={LogInimg}  width="100%" height="100%" className='me-2 ms-2 mt-0 mb- img-fluid'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
