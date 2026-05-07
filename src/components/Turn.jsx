import React from 'react'
import chica from "../assets/chica-2.png"

const Turn = () => {
    return (
        <div className='bg-white w-full h-[60vh] relative'>
            <div className='w-full h-full rounded-t-2xl bg-olive-500'>
                <div className='flex flex-col w-1/2 items-center justify-center h-full gap-4'>
                    <p className='font-accent text-white text-5xl'>Lleva tu belleza al siguiente nivel</p>
                    <p className='font-body text-white'>Haz clic en el siguiente botón para iniciar una conversación por WhatsApp</p>
                    <div className="flex items-center justify-center w-48 px-4 py-2 text-olive-600 bg-white font-body text-lg rounded-full
                    hover:bg-olive-800 hover:text-white 
                    transition-all duration-500 ease-in-out hover:cursor-pointer z-10 ">
                        <button className="hover:cursor-pointer">
                            Reserva tu turno
                        </button>

                    </div>

                </div>


            </div>
            <img
                src={chica}
                alt="hero"
                className="absolute right-20 bottom-0 h-[530px] object-contain z-10"
            />

        </div>
    )
}

export default Turn