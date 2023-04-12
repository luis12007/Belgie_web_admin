import React, { useEffect, useState } from 'react';
import Services from '../Services/UserServices';
import ItemDB from './ItemDB';
import Exportexcel from 'react-export-excel';

/* Navigation bar component with all its buttons */
const PostContainerUser = () => {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem("Token");
    const [Search, setSearch] = useState('');

    useEffect(() => {
        getPosts();
    }, []);

    /*     {   setPosts(false)} */
    const getPosts = async () => {

        let response = await Services.GetAll(token);
        let data = response;
        setPosts(data);
    }
    const ExcelFile = Exportexcel.ExcelFile;
    const ExcelSheet = Exportexcel.ExcelSheet;
    const ExcelColumn = Exportexcel.ExcelColumn;

    console.log(posts);

    posts.forEach(element => {
        const newarray = element.Caducidad;
        const newarray2 = element.DiaCompra;
        element.Caducidad = newarray.slice(0, 10);
        element.DiaCompra = newarray2.slice(0, 10);

    });

    const onChange = (e, save) => {/* Para que no se recargue la pagina */
        save(e.target.value);
    }

    const SearchHandler = async (e) => {/* Cuando damos click al boton llamar a la funcion login */
        e.preventDefault(); //para que no se recargue
        
    }


    return (
        <>
            <div className='border rounded-lg  bg-gray-100 drop-shadow-md mt-3 mx-3 mb-10 justify-center items-center '>
                <div className='flex justify-end items-center mx-10 mt-5'>
                    <h1 className='mx-3'>busqueda: </h1>
                    <input type="password" className='bg-neutral-200 rounded-lg  py-2 mx-3' placeholder=''
                        value={Search}
                        onChange={(e) => onChange(e, setSearch)} />
                    <button className='border px-8 py-3 rounded-full text-cyan-50 bg-cyan-400' onClick={SearchHandler} >buscar</button>
                </div>
                <div className='border  bg-white m-7'>
                    <div className='flex justify-between' >
                        <table className='w-full h-96 text-center overflow-auto display: block ' >
                            <tbody className='w-full'>
                                <th className='border w-16'>Id</th>
                                <th className='border w-1/6'>Nombre</th>
                                <th className='border w-1/6'>Cantidad</th>
                                <th className='border w-1/6'>Precio Individual</th>
                                <th className='border w-1/6'>Precio de caja</th>
                                <th className='border w-1/6'>Dia de compra</th>
                                <th className='border w-1/6'>Caducidad</th>
                                <th className='border w-1/6'>Editar</th>
                                <th className='border w-1/6'>Eliminar</th>
                            </tbody>
                            {posts && posts.map((data) => {
                                return <ItemDB idinventario={data.idinventario} Nombre={data.Nombre} Cantidad={data.Cantidad} PrecioIndividual={data.PrecioIndividual} PrecioCaja={data.PrecioCaja} DiaCompra={data.DiaCompra} Caducidad={data.DiaCompra} />
                            })}
                        </table>
                    </div>


                </div>

                <div className='flex justify-center items-center mb-10'>
                    <ExcelFile element={<button className='border px-8 py-3 rounded-full text-cyan-50 bg-green-600' >exportar a excel</button>} filename="Inventario Belgie">
                        <ExcelSheet data={posts} name="Inventario">
                            <ExcelColumn label="idinventario" value="idinventario" />
                            <ExcelColumn label="Nombre" value="Nombre" />
                            <ExcelColumn label="Cantidad" value="Cantidad" />
                            <ExcelColumn label="PrecioIndividual" value="PrecioIndividual" />
                            <ExcelColumn label="PrecioCaja" value="PrecioCaja" />
                            <ExcelColumn label="DiaCompra" value="DiaCompra" />
                            <ExcelColumn label="Caducidad" value="Caducidad" />
                        </ExcelSheet>
                    </ExcelFile>

                </div>
            </div>
        </>
    )
}

export default PostContainerUser;//exportando