import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();
    const EnterHandler = () => { //Handler that sends the Home when clicking the button
        navigate("/Home");
    }
    return (
        <div>
            <div className='text-success mt-5 ms-5 me-5'>
            <div class="sidebar-header d-flex justify-content-start pt-5">
                <h1 class="pt-3 fw-bold text-info">ECO</h1>
                <h1 class="pt-3 fw-bold text-success text-primary text-opacity-75">GREEN</h1>
            </div>
            </div>
            <div className='text-secondary mt-5 ms-5'>
                <h2>Inicia sesion</h2>
            </div>
            <form className='mt-2 ms-5 me-5'>
                <div className="form-floating mt-5">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label for="floatingInput">Correo electrónico</label>
                </div>
                <div className="form-floating mt-5">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña"></input>
                    <label for="floatingPassword">Contraseña</label>
                </div>
            </form>
            <div className='mt-2 ms-5 me-5 text-center '>
                <a href="ForgotPass" class="nav-link">¿olvidaste tu contraseña?</a>
            </div>
            <div class="d-grid gap-2 mt-5 mb-3 ms-5 me-5">
                <button class="btn btn-primary btn-lg" type="button" onClick={EnterHandler}>INICIAR SESION</button>
            </div>
        </div>
    );
}