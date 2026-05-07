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
        }
    ];

    return (
        <section className="relative flex px-6 bg-white w-full h-full">
            <div className="w-1/2">
                <div className="w-full flex items-start flex-col p-10 gap-6">
                    <h4 className="font-title text-olive-600 text-3xl">Nuestros Servicios</h4>
                    <p className="font-body text-olive-600">Diseño de piel, manos y cejas, faciales y corporales.</p>
                    
                    <div className="flex items-center justify-center w-30 px-3 py-2 text-white bg-olive-500 font-body text-lg rounded-full
                    hover:bg-olive-800 hover:text-white 
                    transition-all duration-500 ease-in-out hover:cursor-pointer z-10 ">
                        <button className="hover:cursor-pointer">
                            Ver más
                        </button>

                    </div>
                </div>

            </div>
            <div className="w-1/2">
                <div className="relative flex flex-col gap-3 max-w-4xl mx-auto z-20 ">
                    {servicios.map((s) => {


                        return (
                            <div
                                key={s.id}
                                className="overflow-hidden  flex flex-col text-start gap-1 "
                            >
                                <div className="flex items-center">
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        className=" h-18 w-18 object-cover rounded-md"
                                    />


                                    <div className="p-3 flex flex-col gap-0">
                                        <h3 className="text-sm text-olive-700  font-title">{s.title}</h3>

                                        <p className="text-xs text-[#a0907e] ">
                                            {s.description}
                                        </p>
                                    </div>

                                </div>
                                <hr className="mt-2 border-t border-red-100" />



                            </div>

                        );
                    })}
                </div>

            </div>

        </section>
    );
};

export default Services;