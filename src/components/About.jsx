import afdp from "../assets/afdp.jpg"
const About = () => {
    const equipo = [
        {
            id: 1,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Nanoblading • Faciales • Miropigmentación • Faciales • Corporales',
            image: "https://placehold.net/avatar.png"
        },
        {
            id: 2,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/avatar.png"
        },
        {
            id: 3,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/avatar.png"
        },
        {
            id: 4,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/avatar.png"
        },
        {
            id: 5,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/avatar.png"
        },
        {
            id: 6,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/avatar.png"
        }]

    return (
        <section id="about" className="w-full h-full text-center bg-[#FFF6E4] rounded-4xl">
            <div className="flex  items-center justify-center gap-10 p-10">
                <div className="flex flex-col items-start gap-4 p-4">
                    <h2 className="font-title text-4xl text-olive-600">Sobre nosotras</h2>
                    <p className="font-body text-start text-md text-olive-600 mr-10">
                        Un espacio dedicado al cuidado estético, donde cada detalle es pensado para lograr resultados naturales,
                        armónicos y duraderos.
                    </p>
                </div>
                <div className="relative">
                    <img src={afdp} alt="" className="w-1/3 rounded-full " />

                </div>
            </div>
            <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center md:mx-20 lg:mx-40 '>

                {equipo.map((e) => (
                    <div
                        key={e.id}
                        className=' bg-white rounded-full flex h-24 w-64 items-center text-start gap-4 p-4'>
                        <img src={e.image} alt="perfil" className="h-12 w-12 hover:scale-110 transition-all duration-300" />
                        <div className="flex flex-col">
                            <p className="font-title text-sm">{e.name}</p>
                            <p className=" font-light text-olive-600 text-xs">{e.description}</p>
                        </div>
                    </div>

                ))}

            </div>
        </section >

    )
}

export default About