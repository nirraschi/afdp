import { MapPin, CalendarCheck } from 'lucide-react';
import React from 'react'


const Contact = () => {
  return (


    <section className='h-full w-full flex flex-col items-center gap-6 bg-white rounded-t-2xl p-10 md:p-20'>
      <div className='flex flex-col items-center justify-center gap-12  p-10' >
        <CalendarCheck className='text-red-200' size={48} />

        <h4 className='font-title text-5xl text-olive-800'>Reservá tu turno</h4>
        <p className='font-body mx-40 text-center text-olive-600'>Podés escribirnos directamente por WhatsApp para consultar o reservar tu turno.
          Estamos para ayudarte y asesorarte en lo que necesites.</p>
        <button className='rounded-full bg-olive-500 text-white 
        px-4 py-2 
        font-semibold font-body 
        hover:scale-101 hover:text-olive-200
        transition-all duration-300'>WhatsApp</button>
      </div>



      <div className='flex gap-30'>

        <div className='flex flex-col items-center justify-center '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1218584973444!2d-65.22120902488969!3d-26.815745276705133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d592899d0ed%3A0x88ea95361f029b86!2sA%20Flor%20de%20Piel!5e1!3m2!1ses!2sar!4v1777408503938!5m2!1ses!2sar"
            width="700"
            height="700"
            className='object-contain md:rounded-md xl h-[200px] w-[350px] md:h-[350px] md:w-[300px] rounded-2xl '
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>


        <div className='rounded-md bg-olive-200 flex flex-col items-center p-10 gap-6 '>
          <MapPin className='text-red-200' size={48} />


          <p className='font-title text-3xl text-olive-800'>Dónde encontrarnos</p>
          <p className='font-body mx-40 text-center'>Calle Lucas Córdoba 868, San Miguel de Tucumán</p>
          <div>
            <p>Horarios</p>
            <p>Lunes a Viernes de 9:00 a 12:00 y de 14:00 a 19:00</p>
            <p>Sábado de 9:00 a 18:00</p>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Contact