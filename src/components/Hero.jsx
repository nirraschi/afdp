import chica from "../assets/chica.png"

const Hero = () => {
    return (
        <section id="hero" className="flex h-screen w-full flex-col rounded-t-2xl bg-white">

            {/* ── TOP HALF ── */}
            <div className="flex  items-center justify-between px-10 pb-8 py-20 lg:px-20">

                {/* Left: título principal */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#86a884]">
                        Centro de estética · Tucumán
                    </h3>
                    <p className="text-xl text-olive-500 font-body">
                        Encontrá tu estilo y realzá tu belleza en
                    </p>
                    <h1 className="font-accent text-6xl italic text-olive-700 leading-none tracking-tight lg:text-7xl">
                        A Flor de Piel
                    </h1>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#86a884]">
                        Almacén de Estética y Salud
                    </p>
                </div>

                {/* Right: bajada sutil */}
                <h4 className="hidden max-w-[200px] text-right text-xs leading-relaxed text-olive-400 lg:block self-start">
                    Especialistas en cejas, pestañas,<br />uñas y micropigmentación.
                </h4>
            </div>



            {/* ── BOTTOM HALF ── */}


            <div className="relative flex items-center overflow-hidden rounded-2xl bg-olive-800 px-10 py-10 lg:px-16 ">

                {/* Contenido izquierdo */}
                <div className="z-10 flex max-w-sm flex-col gap-5">
                    <h2 className="text-sm leading-relaxed text-olive-400">
                        Centro de estética en Tucumán especializado en cejas,<br />
                        pestañas, uñas y micropigmentación.
                    </h2>

                    {/* CTAs */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#reserva"
                            className="flex items-center gap-2 rounded-full bg-[#f9f7f5] px-5 py-2.5 text-xs font-bold tracking-wide text-olive-900 transition-all duration-200 hover:bg-white"
                        >
                            Reservá tu turno
                            <span className="text-sm leading-none">→</span>
                        </a>
                        <a
                            href="#services"
                            className="text-xs tracking-wide text-olive-500 transition-colors hover:text-olive-300"
                        >
                            Ver servicios
                        </a>
                    </div>

                    {/* Tags de servicios */}
                    <div className="flex flex-wrap gap-1.5">
                        {["Micropigmentación", "Faciales", "Uñas", "Cejas & Pestañas"].map((tag, i) => (
                            <span
                                key={tag}
                                className={`rounded-full px-3 py-1 text-[10px] font-medium ${i % 2 === 0
                                    ? "bg-olive-700 text-[#86a884]"
                                    : "bg-olive-700 text-[#c4917f]"
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Imagen de la chica — anclada al fondo derecho */}
                <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-olive-950/60 to-transparent" />


            </div>
            <div className="relative hidden md:block">
                <img
                    src={chica}
                    alt="A Flor de Piel"
                    className="absolute bottom-0 right-10 z-10 h-[90%] h-[450px] object-contain  "
                />
            </div>




            {/* Degradado decorativo detrás de la imagen */}

        </section>
    )
}

export default Hero