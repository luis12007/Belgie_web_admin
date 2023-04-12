const BASE_URL = "http://localhost:3080"/* La URL Base para no repetirla siempre */

const Services = {};/* nuestro arreglo de funciones poder llamarlas */



Services.LoginBelgie = async (User, Pass) => {/* Login, necesita usuario y contraseña */
    const Response = await fetch(`${BASE_URL}/Login`, {
        method: "POST",/* Medodo a utilizar */
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({/* Para convertir a string nuestros datos */
            Nombre: `${User}`,
            Pass: `${Pass}`
        })
    })
    if (Response.ok) {/* La respuesta esta bien */
        const Token = await Response.json()
        console.log(Token)
        return Token
    }
    return {};/* No esta bien la respuesta no nos da nada */
}



Services.Update = async (id, Nombre = "none", Cantidad = 0, PrecioIndividual = 0, PrecioCaja = 0, DiaCompra = "", Caducidad = "") => {
    try {                       /* Funcion Update obtienen un post y sus parametros en "nulo" por defecto */
            const Response = await fetch(`${BASE_URL}/Products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                        Nombre:`${Nombre}`,
                        Cantidad:`${Cantidad}`,
                        PrecioIndividual:`${PrecioIndividual}`,
                        PrecioCaja:`${PrecioCaja}`,
                        DiaCompra:`${DiaCompra}`,
                        Caducidad:`${Caducidad}`
                })
            })
            const Putdata = await Response.json()
            console.log(Putdata)
            return Putdata
    } catch (error) {
        console.log(error)
    }
}



Services.GetAll = async (token) => {/* Obtener todos con sus Props Limit y page, para poder luego hacer el InfiniteScroll */
    try {
        const Response = await fetch(`${BASE_URL}/Products`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await Response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}



Services.GetById = async (Id) => {/* Obtener todos con sus Props Limit y page, para poder luego hacer el InfiniteScroll */
    try {
        const Response = await fetch(`${BASE_URL}/ProductsById/${Id}`, {
            method: "GET"
        })
        const data = await Response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

Services.PostFruit = async (Nombre = "none", Cantidad = 0, PrecioIndividual = 0, PrecioCaja = 0, DiaCompra = "", Caducidad = "") => {/* Create post con sus parametros */
    try {                                                                  /* y role para verificar */
            const Response = await fetch(`${BASE_URL}/Products`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        Nombre:`${Nombre}`,
                        Cantidad:`${Cantidad}`,
                        PrecioIndividual:`${PrecioIndividual}`,
                        PrecioCaja:`${PrecioCaja}`,
                        DiaCompra:`${DiaCompra}`,
                        Caducidad:`${Caducidad}`
                    })
            })
            const data = await Response.json()
            console.log(data)
            return data
    } catch (error) {/* Si nos da error */
        console.log(error)
    }
}

Services.Delete = async (Id) => {/* Obtener todos con sus Props Limit y page, para poder luego hacer el InfiniteScroll */
    try {
        const Response = await fetch(`${BASE_URL}/Products/${Id}`, {
            method: "DELETE",
        })
        const Drespo = await Response.json()
        console.log(Drespo)
        return Drespo
    } catch (error) {
        console.log(error)
    }
}

export default Services;/* Exportando servicios  */

