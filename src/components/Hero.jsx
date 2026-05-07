import chica from "../assets/chica.png"
import logo from "../assets/logo-blanco.png"
import Flor2 from "../assets/flower2.svg?react"
import Flor3 from "../assets/flower3.svg?react"

const Hero = () => {

    return (
        <section className="w-full flex flex-col justify-center mt-2 h-screen  rounded-t-2xl bg-white 
            ">

            {/* <Flor2 className="w-125 h-125 text-olive-500 absolute -right-10 top-20  object-contain z-20 opacity-100  "
            />
            <Flor2 className=" rotate-180 w-125 h-125 text-olive-500 absolute -left-10 top-48  object-contain z-20 opacity-100  "
            /> */}

            <div className=" flex flex-col items-center justify-center  z-10   h-1/2 w-2/3 text-center  ">

                <h1 className="text-3xl font-title text-olive-700 font-semibold">Realzá tu belleza natural en</h1>

                <div className="flex text-start gap-6 items-center">
                    <h2 className="text-[75px] font-accent text-olive-500 " >A Flor de Piel</h2>
                    <p className="font-body w-40 text-olive-500 leading-tight font-semibold">Almacén de Estética y Salud</p>

                </div>


            </div>

            <div className="relative bg-olive-500 flex items-start rounded-t-2xl
            w-full h-1/2 mb-20 ">

                {/* TEXTO */}
                <div className="flex flex-col gap-10 z-10 w-2/3 h-full items-center justify-center">
                    <h1 className="text-md font-body text-white font-light text-center text-balance w-1/2">Centro de estética en Tucumán especializado en cejas, pestañas, uñas y micropigmentación.</h1>
                    <div className="flex items-center justify-center w-48 px-4 py-2 text-olive-600 bg-white font-body text-lg rounded-full
                    hover:bg-olive-800 hover:text-white 
                    transition-all duration-500 ease-in-out hover:cursor-pointer z-10 ">
                        <button className="hover:cursor-pointer">
                            Reserva tu turno
                        </button>

                    </div>
                </div>

                <img
                    src={chica}
                    alt="hero"
                    className="absolute right-20 bottom-0 h-[530px] object-contain z-10"
                />




            </div>

        </section>
    )
}

export default Hero