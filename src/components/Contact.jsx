import React from 'react'

const Contact = () => {
  return (
    <section className='h-screen w-full flex flex-col items-center gap-6 mt-20'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <h2 className='font-title text-2xl'>¿Dónde estamos?</h2>
        <p className='font-body'>Te esperamos en</p>
        <p>Calle Lucas Córdoba 868, San Miguel de Tucumán</p>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1218584973444!2d-65.22120902488969!3d-26.815745276705133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d592899d0ed%3A0x88ea95361f029b86!2sA%20Flor%20de%20Piel!5e1!3m2!1ses!2sar!4v1777408503938!5m2!1ses!2sar" 
        width="800" 
        height="550" 
        className='object-contain md:rounded-4xl h-[200px] w-[350px] md:h-[200px] md:w-[800px] rounded-2xl '
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">          
        </iframe>
        <div>
          <h3>Por información o Solicitar turno</h3>
          <p>0261-433-5260</p>
          <p>Clic para abrir en WhatsApp</p>
        </div>


      </div>
    </section>
  )
}

export default Contact