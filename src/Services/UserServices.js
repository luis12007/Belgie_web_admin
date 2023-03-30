//const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1"/* La URL Base para no repetirla siempre */
//
//const Services = {};/* nuestro arreglo de funciones poder llamarlas */
//
///* Services.{Algo} es para guardar la funcion en Services */
///* Todos los metodos tienen un TryCatch ahora o luego cuando se utilicen*/
//
////Es el unico que no necesita token
//Services.loginAdmin = async (User, Pass) => {/* Login, necesita usuario y contraseña */
//
//    const Response = await fetch(`${BASE_URL}/auth/signin`, {
//        method: "POST",/* Medodo a utilizar */
//        headers: {
//            "Content-type": "application/json"
//        },
//        body: JSON.stringify({/* Para convertir a string nuestros datos */
//            username: `${User}`,
//            password: `${Pass}`
//        })
//    })
//    if (Response.ok) {/* La respuesta esta bien */
//        const Token = await Response.json()
//        return Token
//    }
//    return {};/* No esta bien la respuesta no nos da nada */
//}
//
////Verificar nuestro token, de nuestro usuario
//Services.verifyToken = async (token) => {
//    const response = await fetch(`${BASE_URL}/auth/whoami`, {
//        method: "GET",
//        headers: {
//            "Authorization": `Bearer ${token}`
//        }
//    });
//    if (response.ok) {
//        const data = await response.json();
//        return data;
//    }
//    return {};
//}