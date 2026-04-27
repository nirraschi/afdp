
import pestañas from '../assets/pestañas.jpg'
import uñas from '../assets/uñas.jpg'
import faciales from '../assets/faciales.jpg'
import corporales from '../assets/corporales.jpg'
import salon from '../assets/salon.jpg'
import yoga from '../assets/yoga.jpg'

const Services = () => {
    const servicios = [
        {
            id: 1,
            title: 'Cejas & Pestañas',
            description: '',
            image: pestañas
        },
        {
            id: 2,
            title: 'Manos & Pies',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: uñas
        },
        {
            id: 3,
            title: 'Faciales',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: faciales
        },
        {
            id: 4,
            title: 'Corporales',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: corporales
        },
        {
            id: 5,
            title: 'Salón',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: salon
        },
        {
            id: 6,
            title: 'Salud',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: yoga
        }]



    const CornerFlower = () => (
        <svg className="absolute top-0 right-0 w-12 h-12 opacity-20 pointer-events-none" viewBox="0 0 48 48" fill="none">
            <ellipse cx="38" cy="10" rx="5" ry="9" transform="rotate(30 38 10)" fill="#F1B1B8" />
            <ellipse cx="28" cy="5" rx="5" ry="9" transform="rotate(-20 28 5)" fill="#E9D4A8" />
            <ellipse cx="45" cy="20" rx="5" ry="9" transform="rotate(80 45 20)" fill="#BEC29D" />
            <circle cx="36" cy="12" r="3" fill="#d4a882" />
        </svg>
    );


    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-full py-16 px-6 bg-white font-sans">

            <p className="text-xs tracking-widest uppercase text-[#b8967a] italic font-serif mb-1">
                A flor de piel
            </p>
            <h2 className="text-4xl font-serif font-light text-[#3a3028] leading-tight">
                Nuestros Servicios
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl w-full">
                {servicios.map((s) => (
                    <div
                        key={s.id}
                        className="relative border border-[#e8d8c8] bg-white overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(185,145,110,0.13)]"
                        style={{ borderRadius: '2px' }}
                    >

                        <div className="relative h-40 bg-[#f7f0e8] overflow-hidden">
                            <img
                                src={s.image}
                                alt={s.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                style={{ filter: 'saturate(0.85)' }}
                            />
                        </div>


                        <div className="relative p-4 pb-5">
                            <CornerFlower />
                            <p className="text-[10px] tracking-widest uppercase text-[#b8967a] mb-1">
                                {s.tag}
                            </p>

                            <a href={`/servicios/${s.id}`}
                                className="block font-serif text-lg font-normal text-[#3a3028] hover:text-[#b8967a] transition-colors duration-200 mb-2"
                            >

                                {s.title}
                            </a>
                            <p className="text-xs text-[#a0907e] leading-relaxed font-light mb-3">
                                {s.description}
                            </p>

                        </div>
                    </div>
                ))}

            </div >


        </section >




    )
}     
export default Services