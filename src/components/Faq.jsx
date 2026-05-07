import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "¿Cuáles son los servicios que ofrecen?",
        a: "Micropigmentación, uñas (semipermanente, soft gel, nail art, esculpidas), cejas y pestañas (microblading, nanoblading, laminado, lifting, volumen ruso), faciales (limpieza, dermaplaning, radiofrecuencia, antiage, punta de diamante) y corporales. ¡Y mucho más!",
    },
    {
        q: "¿Cuáles son los horarios de atención?",
        a: "Lunes a viernes de 9:00 a 12:30 y de 14:00 a 19:00. Sábados de 9:00 a 14:00.",
    },
    {
        q: "¿Es necesario dejar una seña para reservar turno?",
        a: "No. Reservás el turno sin necesidad de dejar ninguna seña.",
    },
    {
        q: "¿Qué métodos de pago aceptan?",
        a: "Tarjetas de crédito y débito (Visa, Mastercard, Amex), efectivo y transferencia bancaria.",
    },
    {
        q: "No sé cuál servicio sería el indicado para mí. ¿Qué hago?",
        a: "Comunicate por WhatsApp. Te ofrecemos asesoramiento profesional gratuito para tu caso.",
    },
];

function FAQItem({ item, index, isLast }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={!isLast ? "border-b border-olive-200" : ""}
        >
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none"
                aria-expanded={open}
            >
                <span className="text-sm font-semibold leading-snug text-olive-900">
                    {item.q}
                </span>
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-base leading-none transition-colors ${
                        open ? "border-olive-900 text-olive-900" : "border-olive-300 text-olive-400"
                    }`}
                >
                    +
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-xs leading-relaxed text-olive-500">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Faq() {
    return (
        <section id="faq" className="w-full  px-6 py-16">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">

                {/* ── LEFT ── */}
                <div className="flex flex-col gap-4 lg:sticky lg:top-8 lg:self-start">
                    <span className="w-fit rounded-full bg-[#e8d5cf] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#8b5e52]">
                        FAQ
                    </span>
                    <h2 className="text-4xl font-bold leading-tight tracking-tight text-olive-900">
                        Preguntas<br />frecuentes
                    </h2>
                    <p className="text-sm leading-relaxed text-olive-500">
                        Si tenés alguna duda, no dudes en consultarnos.<br className="hidden lg:block" />
                        Estamos acá para ayudarte.
                    </p>
                    <a
                        href="#contacto"
                        className="mt-1 flex w-fit items-center gap-2 rounded-full bg-olive-900 px-5 py-2.5 text-xs font-bold tracking-wide text-olive-50 transition-all duration-200 hover:bg-olive-700"
                    >
                        Contactanos
                        <span className="text-sm leading-none">→</span>
                    </a>
                </div>

                {/* ── RIGHT: acordeón ── */}
                <div className="flex flex-col">
                    {faqs.map((item, i) => (
                        <FAQItem
                            key={item.q}
                            item={item}
                            index={i}
                            isLast={i === faqs.length - 1}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}