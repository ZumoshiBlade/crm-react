import { obtenerCliente } from '../data/clientes'
import { useNavigate, Form, useLoaderData } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'


export async function loader({ params }) {

    const cliente = await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }

    return cliente;
}

const EditarCliente = () => {

    const navigate = useNavigate();
    const cliente = useLoaderData();

    return (
        <>
            <h1 className='font-black text-4xl text-green-800'>Editar Cliente</h1>
            <p className='mt-3'>A continuación podrás modificar los datos de un cliente</p>

            <div className="flex justify-end">
                <button className="bg-green-800 text-white px-3 py-1 font-bold uppercase" onClick={() => navigate('/')}>Volver</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

                {/*errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)*/}

                <Form
                    method='POST'
                    noValidate
                >
                    <Formulario 
                        cliente={cliente}
                    />
                    <input
                        type="submit"
                        className='mt-5 w-full bg-green-800 hover:bg-green-950 cursor-pointer p-3 uppercase font-bold text-white text-lg'
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    )
}

export default EditarCliente