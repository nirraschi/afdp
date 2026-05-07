import { useState } from "react";
import pestañas from "../assets/pestañas.jpg";
import uñas from "../assets/uñas.jpg";
import faciales from "../assets/faciales.jpg";
import micro from "../assets/micro.jpg";

const servicios = [
    {
        id: 1,
        title: "Micropigmentación",
        description: "Diseño preciso para labios, ojos y cejas con acabado natural.",
        tags: ["Microblading", "Nanoblading", "Labios", "Delineado", "Retoque", "Corrección"],
        image: micro,
        accent: "rose",
    },
    {
        id: 2,
        title: "Manos y Pies",
        description: "Uñas impecables y cuidado completo para lucir siempre perfecta.",
        tags: ["Semipermanente", "Nail Art", "Soft Gel", "Capping", "Esculpidas", "Pedicuría", "Belleza de pies"],
        image: uñas,
        accent: "sage",
    },
    {
        id: 3,
        title: "Cejas y Pestañas",
        description: "Diseño de mirada con técnicas modernas y resultados naturales.",
        tags: ["Pelo a pelo", "Laminado", "Lifting", "Volumen ruso", "Diseño de cejas"],
        image: pestañas,
        accent: "rose",
    },
    {
        id: 4,
        title: "Faciales",
        description: "Tratamientos para renovar, hidratar y devolver luminosidad a tu piel.",
        tags: ["Limpieza facial", "Dermaplaning", "Antiage", "Radiofrecuencia", "Hidratación", "Mascaras", "Punta de diamante"],
        image: faciales,
        accent: "sage",
    },
];

const tagStyle = {
    rose: "bg-[#f0e4df] text-[#9b6b5e]",
    sage: "bg-olive-300 text-olive-600",
};

const MAX_TAGS = 3;

const Services = () => {
    return (
        <section id="services" className="w-full bg-white px-6 py-16">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">

                {/* Left col */}
                <div className="flex flex-col gap-5 lg:pt-1">
                    <span className="w-fit rounded-full bg-[#e8d5cf] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#8b5e52]">
                        Servicios
                    </span>
                    <h2 className="text-4xl font-bold leading-tight tracking-tight text-olive-900">
                        Nuestros<br className="hidden lg:block" /> servicios
                    </h2>
                    <p className="text-sm leading-relaxed text-olive-500">
                        Diseño de piel, manos y cejas,<br className="hidden lg:block" /> faciales y corporales.
                    </p>
                    <a
                        href="#"
                        className="mt-1 flex w-fit items-center gap-2 rounded-full bg-olive-900 px-5 py-2.5 text-xs font-semibold tracking-wide text-olive-50 transition-all duration-200 hover:bg-olive-700"
                    >
                        Ver todos los servicios
                        <span className="text-base leading-none">→</span>
                    </a>
                </div>

                {/* Right col — service list */}
                <div className="flex flex-col divide-y divide-olive-200">
                    {servicios.map((s) => {
                        const visibleTags = s.tags.slice(0, MAX_TAGS);
                        const extra = s.tags.length - MAX_TAGS;

                        return (
                            <div key={s.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                                {/* Thumbnail */}
                                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-[14px]">
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex flex-1 flex-col gap-1.5">
                                    <p className="text-sm font-semibold text-olive-900">{s.title}</p>
                                    <p className="text-[11px] leading-relaxed text-olive-400">{s.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {visibleTags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagStyle[s.accent]}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {extra > 0 && (
                                            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagStyle[s.accent]}`}>
                                                +{extra}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;