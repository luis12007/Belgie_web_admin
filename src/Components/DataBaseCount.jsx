import React, { useEffect, useState } from 'react';
import Services from '../Services/UserServices';
import ItemDBCount from './ItemDBCount';
import Exportexcel from 'react-export-excel';

/* Navigation bar component with all its buttons */
const DataBaseCount = () => {
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
            <div className='border rounded-lg  bg-gray-100 drop-shadow-md mt-3 mx-3 mb-10 flex justify-center items-center '>
                <div className='border w-5/12 bg-white m-7'>
                    <div className='flex justify-between ' >
                        <table className='w-full h-96 text-center overflow-auto display: block ' >
                            <tbody className=' w-full'>
                                <th className='border w-1/12 '>Nombre</th>
                                <th className='border w-1/12  '>Cantidad</th>
                            </tbody>
                            {posts && posts.map((data) => {
                                return <ItemDBCount idinventario={data.idinventario} Nombre={data.Nombre} Cantidad={data.Cantidad} />
                            })}
                        </table>
                    </div>
                </div>
                <div className='flex justify-center items-center mb-10'>
                    <ExcelFile element={<button className='border px-8 py-3 rounded-full text-cyan-50 bg-green-600' >exportar a excel</button>} filename="Inventario Belgie">
                        <ExcelSheet data={posts} name="Inventario">
                            <ExcelColumn label="Nombre" value="Nombre" />
                            <ExcelColumn label="Cantidad" value="Cantidad" />
                        </ExcelSheet>
                    </ExcelFile>
                </div>
            </div>
        </>
    )
}

export default DataBaseCount;//exportando