import React, { useState, useEffect } from "react";
import { API } from "../../API";
import Spinner from "../spinner/Spinner";

export default function CRUDModal({ isOpen, closeModal, asignatura, reloadAsignaturas }) {

    const [nombre, setNombre] = useState(asignatura.nombre);
    const [codigoCarrera, setCodigoCarrera] = useState(asignatura.codigo_carrera);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setNombre(asignatura.nombre);
        setCodigoCarrera(asignatura.codigo_carrera);
    }, [asignatura]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        const datosActualizados = {
            id: asignatura.id,
            nombre,
            codigo_carrera: codigoCarrera,
        };
        try {
            const response = await fetch(`${API}/api/adminin/asignaturas`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosActualizados),
            });

            if (!response.ok) {
                throw new Error('Algo salió mal al actualizar la asignatura');
            }

            const data = await response.json();
            console.log(data);
            reloadAsignaturas();


            closeModal();
        } catch (error) {
            console.error('Error al actualizar la asignatura:', error);
        } finally {
            setIsLoading(true);
        }
    };



    return (
        <>
            {
                isLoading ?
                    (<div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                        <Spinner />
                    </div>) :
                    (
                        < div
                            id="crud-modal"
                            tabIndex={1}
                            aria-hidden={!isOpen}
                            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                        >
                            <div className="flex items-center justify-center ">
                                {/* Modal content */}
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    {/* Modal header */}
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Actualizar Asignatura
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={closeModal}

                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-toggle="crud-modal"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* Modal body */}
                                    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                                        <div className="grid gap-4 mb-4 grid-cols-2">
                                            <div className="col-span-2">
                                                <label
                                                    htmlFor="name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    required=""
                                                    value={nombre}
                                                    onChange={(event) => setNombre(event.target.value)}
                                                />
                                            </div>
                                            <div className="col-span-2 sm:col-span-1">
                                                <label
                                                    htmlFor="price"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Código
                                                </label>
                                                <input
                                                    type="text"
                                                    name="price"
                                                    id="price"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    required=""
                                                    value={codigoCarrera}
                                                    onChange={(event) => setCodigoCarrera(event.target.value)}

                                                />
                                            </div>

                                        </div>
                                        <button
                                            type="submit"
                                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            <svg
                                                className="me-1 -ms-1 w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Actualizar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div >)
            }
        </>
    )
}