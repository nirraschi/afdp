import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "¿Cómo funciona el período de prueba gratuito?",
        a: "Tienes acceso completo a todas las funcionalidades durante 14 días sin necesidad de tarjeta de crédito. Al finalizar el período, puedes elegir el plan que mejor se adapte a tus necesidades o cancelar sin costo alguno.",
    },
    {
        q: "¿Puedo cambiar de plan en cualquier momento?",
        a: "Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se reflejan de forma inmediata y el cobro se ajusta de forma proporcional al tiempo restante del ciclo de facturación.",
    },
    {
        q: "¿Los datos están seguros en su plataforma?",
        a: "Absolutamente. Utilizamos cifrado AES-256 en reposo y TLS 1.3 en tránsito. Cumplimos con GDPR, SOC 2 Tipo II y realizamos auditorías de seguridad trimestrales por terceros independientes.",
    },
    {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, Amex), transferencias bancarias para planes anuales, y PayPal. Para empresas, también ofrecemos facturación por transferencia bancaria con NET-30.",
    },
    {
        q: "¿Tienen documentación en español?",
        a: "Toda nuestra documentación, tutoriales en video y guías de inicio rápido están disponibles en español. Además, nuestro equipo de soporte está compuesto en su mayoría por hispanohablantes nativos.",
    },
];

function FAQItem({ item, index }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left flex items-center gap-4 py-5 px-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-2xl"
                aria-expanded={open}
            >
                <span className="flex-1 text-base font-semibold text-zinc-800 leading-snug">
                    {item.q}
                </span>

                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="min-w-[1.5rem] h-6 w-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-indigo-300 group-hover:text-indigo-400 transition-colors"
                >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-zinc-500 text-[0.9375rem] leading-relaxed px-6 pb-5">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {index < faqs.length - 1 && (
                <div className="h-px bg-zinc-100 mx-6" />
            )}
        </motion.div>
    );
}

export default function Faq() {
    return (
        <div className="w-full h-screen bg-white p-10">
        <div>Preguntas frecuentes</div>
            <div className="rounded-3xl border border-zinc-100 overflow-hidden bg-white shadow-sm shadow-zinc-100">
                {faqs.map((item, i) => (
                    <FAQItem key={item.q} item={item} index={i} />
                ))}
            </div>

        </div>

    );
}