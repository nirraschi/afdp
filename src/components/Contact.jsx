import { MapPin, Clock, CalendarCheck } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contacto" className="w-full bg-white px-6 py-16">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr]">

                {/* ── LEFT: info ── */}
                <div className="flex flex-col justify-between gap-8 rounded-2xl bg-stone-900 p-8 lg:p-10">

                    {/* Top: encabezado */}
                    <div className="flex flex-col gap-3">
                        <span className="w-fit rounded-full bg-stone-800 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#86a884]">
                            Contacto
                        </span>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight text-stone-50">
                            Encontranos<br />en Tucumán
                        </h2>
                        <p className="text-sm leading-relaxed text-stone-500">
                            Estamos esperándote para cuidarte como merecés.
                        </p>
                    </div>

                    {/* Mid: datos */}
                    <div className="flex flex-col gap-4">
                        {/* Dirección */}
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-stone-800">
                                <MapPin size={16} className="text-[#c4917f]" />
                            </div>
                            <div>
                                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-stone-600">
                                    Dirección
                                </p>
                                <p className="text-xs leading-relaxed text-stone-400">
                                    Calle Lucas Córdoba 868,<br />San Miguel de Tucumán
                                </p>
                            </div>
                        </div>

                        {/* Horario */}
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-stone-800">
                                <Clock size={16} className="text-[#86a884]" />
                            </div>
                            <div>
                                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-stone-600">
                                    Horario
                                </p>
                                <p className="text-xs leading-relaxed text-stone-400">
                                    Lun – Vie: 9:00 – 19:00<br />Sáb: 9:00 – 14:00
                                </p>
                            </div>
                        </div>

                        {/* Turno */}
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-stone-800">
                                <CalendarCheck size={16} className="text-[#c4917f]" />
                            </div>
                            <div>
                                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-stone-600">
                                    Turnos
                                </p>
                                <p className="text-xs leading-relaxed text-stone-400">
                                    Por WhatsApp o Instagram.<br />¡Te esperamos!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href="#reserva"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f9f7f5] py-3 text-xs font-bold tracking-wide text-stone-900 transition-all duration-200 hover:bg-white"
                    >
                        Reservá tu turno
                        <span className="text-sm leading-none">→</span>
                    </a>
                </div>

                {/* ── RIGHT: mapa ── */}
                <div className="min-h-[360px] overflow-hidden rounded-2xl border border-stone-200 lg:min-h-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1218584973444!2d-65.22120902488969!3d-26.815745276705133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d592899d0ed%3A0x88ea95361f029b86!2sA%20Flor%20de%20Piel!5e1!3m2!1ses!2sar!4v1777408503938!5m2!1ses!2sar"
                        width="100%"
                        height="100%"
                        className="h-full min-h-[360px] w-full"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación A Flor de Piel"
                    />
                </div>

            </div>
        </section>
    )
}

export default Contact