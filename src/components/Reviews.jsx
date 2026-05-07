import React from 'react'
import { Star } from 'lucide-react'

const Reviews = () => {

    const reviews = [
        {
            name: "Silvia Lacroix",
            review: "Un lugar sencillo atendido por profesionales de 1er Nivel atención cordial asesoramiento claro y preciso .Recomendable",
            image: "https://lh3.googleusercontent.com/a/ACg8ocISQ-YeGSDhwEmQwsgaiG2YqCQsqS8eH8r1QX6Lfo6SF2Oj_Q=w65-h65-p-rp-mo-ba4-br100"
        },
        {
            name: "Romina Giselle Garcia Fleury",
            review: "Excelente atención, super profesionales y una calidez humana destacable. La mejor opción para sentirte mimada",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjWi5j0xHMI4pZf3OX8jYlN_NOMgHY77IzW8UoT0PTVKbwIahFA=w65-h65-p-rp-mo-br100"
        },
        {
            name: "Gisele Orquera",
            review: "Excelente lugar y magnifica atencion. Todos los servicios q ofrecen son inmejorables, tales como microblading, pestañas c metodo latigo de seda y depilacion laser. SUPER RECOMENDABLE",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVdYvykwDqjVFokhMBoc_fJxVGY0UDEWHZXBrV_0Lxmqd4sZyjG4A=w65-h65-p-rp-mo-ba3-br100"
        },
        {
            name: "Noe",
            review: "Super profesionales las chicas.hermosos trabajos. Lo mejor de lo mejor en micro súper realista de cejas de Marina ! 👏👏👏👏♥️e",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjU1NrgPQ80GAQ0ra_sc8CQe6jXtTM9VfvGgEe7RQWIoADUCmW_j=w65-h65-p-rp-mo-ba3-br100"
        }
    ]


    return (
        // Recorrer y mostrar "reviews"
        <section className="relative w-full h-full text-center bg-white flex flex-col">

            <div className="flex  items-center justify-center gap-10 p-10">
                <div className="flex flex-col items-center gap-6 p-4 text-olive-600 w-full">
                                    <div className='flex'>
                        <Star className="text-amber-300" size={30} />

                        <Star className="text-amber-300" size={30} />

                        <Star className="text-amber-300" size={30} />

                        <Star className="text-amber-300" size={30} />

                        <Star className="text-amber-300" size={30} />


                    </div>
                    <h2 className="font-title text-4xl ">¿Qué opinan nuestros clientes?</h2>
                    <p className="font-body text-start text-md  ">
                        Podes calificar nuestros servicios y compartir tus opiniones haciendo click en el siguiente botón.
                    </p>

                    <p className='text-olive-400'>+ 100 reseñas en Google</p>
                </div>


            </div>
            <div className='flex gap-6 p-6 justify-center md:mx-20 lg:mx-40 '>

                {reviews.map((r) => (
                    <div
                        key={r.name}
                        className=' bg-white shadow-sm rounded-md flex  flex-col h-64 w-64 items-center text-start gap-4 p-4'>
                        <img src={r.image} alt="perfil" className="h-10 w-10 hover:scale-110 transition-all duration-300" />
                        <div className="flex flex-col items-center text-center gap-5">
                            <p className="font-title text-sm">{r.name}</p>
                            <p className=" font-light text-olive-600 text-xs text-balance ">{r.review}</p>
                        </div>
                    </div>

                ))}

            </div>
        </section >
    )
}

export default Reviews