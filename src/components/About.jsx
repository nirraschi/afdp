import afdp from "../assets/afdp.jpg"
import Divider from "../assets/divider.svg?react"

const About = () => {
    const equipo = [
        {
            id: 1,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Nanoblading • Faciales • Miropigmentación • Faciales • Corporales',
            image: "https://placehold.net/400x400.png"
        },
        {
            id: 2,
            name: 'Candelaria Cienfuegos',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/400x400.png"
        },
        {
            id: 3,
            name: 'Marisol Vaca',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/400x400.png"
        },
        {
            id: 4,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/400x400.png"
        },
        {
            id: 5,
            name: 'Marina Bustos Komaid',
            title: 'CEO',
            description: 'Manos • Pies • Faciales • Corporales • Faciales • Corporales',
            image: "https://placehold.net/400x400.png"
        }]

    return (
        <section id="about" className="relative w-full h-full text-center bg-white ">


            <div className="flex  items-center justify-center gap-10 p-10">
                <div className="flex flex-col items-start gap-6 p-4 text-olive-600 w-full">
                    <h2 className="font-title text-4xl ">Nuestro Equipo</h2>
                    <p className="font-body text-start text-md  ">
                        Profesionales dedicadas a cuidar cada detalle
                    </p>
                </div>
                {/* <div className="relative">
                    <img src={afdp} alt="" className="w-1/3 rounded-full " />

                </div> */}
            </div>
            <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-15 justify-items-center md:mx-20 lg:mx-40 '>

                {equipo.map((e) => (
                    <div
                        key={e.id}
                        className=' bg-white shadow-sm rounded-md flex  flex-col h-64 w-64 items-center text-start gap-4 p-4'>
                        <img src={e.image} alt="perfil" className="h-40 w-40 hover:scale-110 transition-all duration-300" />
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