import chica from "../assets/chica.png"
import logo from "../assets/logo-blanco.png"
import Flor2 from "../assets/flower2.svg?react"
import Flor3 from "../assets/flower3.svg?react"

const Hero = () => {

    return (
        <section className="w-full flex flex-col justify-center mt-2 h-full  rounded-t-2xl 
            bg-white">

            <Flor2 className="w-125 h-125 text-olive-500 absolute -right-10 top-20  object-contain z-20 opacity-100  "
            />
            <Flor2 className=" rotate-180 w-125 h-125 text-olive-500 absolute -left-10 top-48  object-contain z-20 opacity-100  "
            />


            <div className="flex flex-col items-center justify-center gap-3 z-10 h-40 ml-10  w-1/2 text-center my-5">
                <h2 className="text-6xl font-title text-olive-800">A Flor de Piel</h2>
                <h1 className="text-3xl font-title text-olive-500 font-semibold">Realzamos tu belleza natural</h1>
            </div>

            <div className="relative bg-olive-500 flex items-start rounded-t-2xl
            w-full h-68 mb-20 
            self-end ">

                {/* TEXTO */}
                <div className="flex flex-col gap-6 z-10  w-1/2 items-center mt-12 ml-10">
                    <h1 className="text-md font-body text-white font-light text-center text-balance">Centro de estética en Tucumán especializado en cejas, pestañas, uñas y micropigmentación.</h1>
                    <button className=" text-olive-600 bg-white
                    font-title text-lg px-4 py-2 rounded-full w-48 font-semibold
                    hover:bg-olive-800 hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer z-10">
                        Reserva tu turno
                    </button>
                </div>

                {/* IMAGEN */}
                <img
                    src={chica}
                    alt="hero"
                    className="absolute left-80 bottom-0 h-[500px] object-contain z-10"
                />
                {/* <img
                    src={logo}
                    alt="hero"
                    className="absolute right-20 -bottom-30 h-[700px] object-contain z-5 opacity-10"
                /> */}



            </div>

        </section>
    )
}

export default Hero