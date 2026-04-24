import chica from "../assets/chica.png"
import logo from "../assets/logo-blanco.png"
import flor4 from "../assets/flor-4.svg"
import flor2 from "../assets/flor-2.svg"
import flor3 from "../assets/flor-3.svg"

const Hero = () => {

    return (
        <section className="w-full flex justify-center mt-5">

            <img
                src={flor2}
                alt="hero"
                className="absolute left-0 bottom-10 h-[250px] object-contain z-20 opacity-100 "
            />
            <img
                src={flor3}
                alt="hero"
                className="absolute right-5 top-0 h-[300px] object-contain z-20 opacity-100 "
            />

            <div className="relative bg-[#bec29d] w-full max-w-6xl h-[400px] rounded-3xl px-10 flex items-center">

                {/* TEXTO */}
                <div className="flex flex-col items-center gap-6 z-10  w-1/2 ml-10">
                    <h1 className="text-6xl font-title text-olive-800 text-left">Tu belleza a Flor de Piel</h1>
                    <p className="text-md font-body text-olive-700 text-left">Te asesoramos para que encuentres tu estilo, sientiendote cómoda con tu imagen, siempre con resultados naturales.</p>
                    <button className="self-start border border-olive-800 text-olive-800
                    font-title text-lg px-5 py-2 rounded-full w-50
                    hover:bg-olive-800 hover:text-white transition-all duration-300 ease-in-out">
                    Conoce más
                    </button>
                </div>

                {/* IMAGEN */}
                <img
                    src={chica}
                    alt="hero"
                    className="absolute right-6 -top-24 h-[500px] object-contain z-10"
                />
                <img
                    src={logo}
                    alt="hero"
                    className="absolute left-0 -top-40 h-[700px] object-contain z-5 opacity-10"
                />



            </div>

        </section>
    )
}

export default Hero