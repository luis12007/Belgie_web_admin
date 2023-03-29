import React from 'react'
import LeafGreen from '../Imgs/LeafGreen.png'
import LeafGray from '../Imgs/LeafGray.png'
import Home from '../Imgs/Home.png'
import Communique from '../Imgs/Communique.png'
import Activity from '../Imgs/Activity.png'
import Request from '../Imgs/Request.png'
import Exit from '../Imgs/Exit.png'
import BelgieLogo from '../Imgs/BelgieLogo.png'

/* Navigation bar component with all its buttons */
export default function NavBar(props) {
    return (
        <div className='border w-56 h-full'>
            <div className='flex justify-center py-10'>
            <img src={BelgieLogo} alt="BelgieLogo" className='w-24 h-24 py-10' />
            </div>
            <ul class="mt-auto p-2"> 
                <li>
                    <a href="">
                            <img src={Home} className='w-10 h-20' alt="" />
                        <h5>
                            Homeasda
                        </h5>
                    </a>
                </li>
            </ul>
            <div class="mt-auto p-2">
                <ul>
                    <li>
                        <a href="">
                            <img src="" alt="" />
                            <h5>
                                Cerrar sessions
                            </h5>
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    );
}