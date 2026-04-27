
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
            <div className="flex  items-center justify-center gap-10">
                <div className="flex flex-col items-start gap-4">
                    <h2 className="font-title text-3xl">A Flor de Piel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                </div>
                <img src="https://placehold.net/1-800x600.png" alt="" className="w-1/2" />
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