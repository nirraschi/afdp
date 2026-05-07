import { useState } from "react";
import pestañas from "../assets/pestañas.jpg";
import uñas from "../assets/uñas.jpg";
import faciales from "../assets/faciales.jpg";
import corporales from "../assets/corporales.jpg";
import Divider from "../assets/divider.svg?react"
import yoga from "../assets/yoga.jpg";
import Flor from "../assets/leaf.svg?react"
import micro from "../assets/micro.jpg"

const Services = () => {
    // una sola card abierta
    const [openId, setOpenId] = useState(null);

    const toggleCard = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const servicios = [
        {
            id: 1,
            title: "Micropigmentación",
            description:
                "Diseño preciso y armonioso para labios, ojos y cejas con acabado natural y elegante.",
            tag: [
                "Microblading",
                "Nanoblading",
                "Micropigmentación de labios",
                "Retoque",
                "Corrección de diseño",
                "Delineado de ojos",
            ],
            image: micro,
        },
        {
            id: 2,
            title: "Manos y Pies",
            description:
                "Uñas impecables y cuidado completo para lucir siempre perfecta.",
            tag: [
                "Semipermanente",
                "Capping",
                "Esculpidas",
                "Soft Gel",
                "Nail Art",
                "Belleza de pies",
                "Pedicuría",
            ],
            image: uñas,
        },
        {
            id: 3,
            title: "Cejas y Pestañas",
            description:
                "Diseño de mirada con técnicas modernas y resultados naturales.",
            tag: [
                "Pestañas pelo por pelo",
                "Diseño de cejas",
                "Laminado de cejas",
                "Volumen ruso",
                "Lifting de pestañas",
            ],
            image: pestañas,
        },

        {
            id: 4,
            title: "Faciales",
            description:
                "Tratamientos para renovar, hidratar y devolver luminosidad a tu piel.",
            tag: [
                "Limpieza facial",
                "Dermaplaning",
                "Hidratación profunda",
                "Radiofrecuencia",
                "Antiage",
                "Mascaras nutritivas",
                "Punta de diamante",
            ],
            image: faciales,
        },
        {
            id: 5,
            title: "Corporales",
            description:
                "Bienestar y estética corporal para sentirte mejor en tu piel.",
            tag: [
                "Drenaje linfático",
                "Masajes relajantes",
                "Reductores",
                "Modeladores",
                "Exfoliación corporal",
                "Radiofrecuencia corporal",
                "Celulitis",
            ],
            image: corporales,
        },

        {
            id: 6,
            title: "Salud y Bienestar",
            description:
                "Espacios para conectar con vos y cuidar cuerpo y mente.",
            tag: ["Yoga", "Pilates", "Meditación"],
            image: yoga,
        },
    ];

    return (
        <section className="relative  px-6 bg-white">

            <div className="w-full h-full flex items-center justify-center py-10">
                <Divider className="absolute flex  w-1/4 object-contain z-10 opacity-80 text-red-300 "
                />

            </div>
            <Flor className=" w-155 h-155 text-olive-500 absolute -right-25 top-25  object-contain z-10 opacity-80  "
            />
            <Flor className=" scale-x-[-1] w-155 h-155 text-olive-500 absolute -left-25 top-155  object-contain z-10 opacity-80  "
            />
            <div className="w-full flex items-center flex-col p-10">
                <h4 className="font-title text-olive-600 text-3xl">Nuestros Servicios</h4>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-15 max-w-4xl mx-auto z-20 ">
                {servicios.map((s) => {
                    const isOpen = openId === s.id;

                    // si está abierta muestra todo, sino solo 3
                    const visibleTags = isOpen ? s.tag : s.tag.slice(0, 3);

                    return (
                        <div
                            key={s.id}
                            className=" bg-white overflow-hidden rounded-3xl flex flex-col  text-start shadow-lg "
                        >
                            <img
                                src={s.image}
                                alt={s.title}
                                className="w-full h-40 object-cover"
                            />

                            <div className="p-4 flex flex-col gap-2 ">
                                <h3 className="text-lg text-olive-700  uppercase font-title">{s.title}</h3>

                                <p className="text-xs text-[#a0907e] mb-3">
                                    {s.description}
                                </p>
                                <div
                                    className={`flex w-full overflow-hidden items-center transition-all duration-700 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-0" : "max-h-16 opacity-80"
                                        }`}
                                >
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {visibleTags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] uppercase bg-[#f7f0e8] px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                                {s.tag.length > 3 && (
                                    <button
                                        onClick={() => toggleCard(s.id)}
                                        className="text-xs uppercase text-[#b8967a]"
                                    >
                                        {isOpen
                                            ? "Ver menos"
                                            : `Ver más +${s.tag.length - 3}`}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;