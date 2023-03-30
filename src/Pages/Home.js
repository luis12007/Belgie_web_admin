/* Image and react imports */
import React from 'react';
import NavBar from '../Components/NavBar';
import Item from '../Components/Item';
import DB from '../Components/DataBase';

export default function Home() {
    return (
        <div className='w-screen h-screen rounded flex '>
            <div className='  '>
                <NavBar></NavBar>
            </div>
            <div className='mx-2 w-full '>
                <div className='h-56'>
                    <Item></Item>
                </div>
                <div className='h-4/6 w-full   '>
                    <DB></DB>
                </div>
            </div>
        </div>
    );
}