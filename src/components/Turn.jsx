import chica from "../assets/chica-2.png"

const Turn = () => {
    return (
        <section id="turno" className="w-full ">
            <div className="relative  w-full overflow-hidden rounded-2xl bg-olive-700 px-10">

                {/* Degradado lateral derecho para integrar la imagen */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-olive-800/30 to-transparent z-10" />

                {/* Contenido */}
                <div className="relative z-20 flex min-h-[280px] items-center px-10 py-12 lg:px-14">
                    <div className="flex max-w-md flex-col gap-5">

                        {/* Badge */}
                        <span className="w-fit rounded-full bg-olive-800 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#86a884]">
                            Turnos
                        </span>

                        {/* Título en cursiva — usa font-accent igual que el Hero */}
                        <p className="font-accent text-4xl italic leading-tight text-olive-50 lg:text-5xl">
                            Llevá tu belleza<br />al siguiente nivel
                        </p>

                        {/* Bajada */}
                        <p className="text-sm leading-relaxed text-olive-500">
                            Iniciá una conversación por WhatsApp y<br className="hidden lg:block" />
                            agendá tu turno en minutos.
                        </p>

                        {/* CTA */}
                        <a
                            href="https://wa.me/5493811234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 flex w-fit items-center gap-2 rounded-full bg-[#f9f7f5] px-6 py-3 text-xs font-bold tracking-wide text-olive-900 transition-all duration-200 hover:bg-white"
                        >
                            Agendá tu turno
                            <span className="text-sm leading-none">→</span>
                        </a>
                    </div>
                </div>



                {/* Imagen de la chica */}
                <img
                    src={chica}
                    alt="A Flor de Piel"
                    className="absolute bottom-0 right-24 z-10 h-[90%] h-[550px] object-contain"
                />

            </div>
        </section>
    )
}

export default Turn