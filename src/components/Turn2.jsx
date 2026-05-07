import React from 'react'
import { CalendarCheck } from 'lucide-react';

const Turn2 = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-12  p-10 bg-white h-full w-full rounded-t-2xl' >
            <CalendarCheck className='text-red-200' size={48} />

            <h4 className='font-title text-4xl text-olive-800 font-bold'>Reservá tu turno</h4>
            <p className='font-body mx-40 text-center text-olive-600'>Podés escribirnos directamente por WhatsApp para consultar o reservar tu turno.
                Estamos para ayudarte y asesorarte en lo que necesites.</p>
            <button className='rounded-full bg-olive-500 text-white 
        px-4 py-2 
        font-semibold font-body 
        hover:scale-101 hover:text-olive-200
        transition-all duration-300'>WhatsApp</button>
        </div>

    )
}

export default Turn2