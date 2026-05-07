const equipo = [
    {
        id: 1,
        name: 'Marina Bustos Komaid',
        title: 'Especialista',
        description: 'Nanoblading · Micropigmentación · Faciales · Corporales',
        initials: 'MB',
        image: null,
        accent: 'sage',
    },
    {
        id: 2,
        name: 'Candelaria Cienfuegos',
        title: 'Especialista',
        description: 'Manos · Pies · Faciales · Corporales',
        initials: 'CC',
        image: null,
        accent: 'rose',
    },
    {
        id: 3,
        name: 'Marisol Vaca',
        title: 'Especialista',
        description: 'Manos · Pies · Faciales · Corporales',
        initials: 'MV',
        image: null,
        accent: 'sage',
    },
    {
        id: 4,
        name: 'Marina Bustos Komaid',
        title: 'Especialista',
        description: 'Manos · Pies · Faciales · Corporales',
        initials: 'MB',
        image: null,
        accent: 'dark',
    },
    {
        id: 5,
        name: 'Marina Bustos Komaid',
        title: 'Especialista',
        description: 'Manos · Pies · Faciales · Corporales',
        initials: 'MB',
        image: null,
        accent: 'rose',
    },
]

const accentMap = {
    sage: {
        card: 'bg-white border border-olive-200',
        avatar: 'bg-olive-200',
        avatarText: 'text-olive-500',
        title: 'text-[#86a884]',
        name: 'text-olive-900',
        desc: 'text-olive-400',
    },
    rose: {
        card: 'bg-white border border-olive-200',
        avatar: 'bg-[#f0e4df]',
        avatarText: 'text-[#9b6b5e]',
        title: 'text-[#c4917f]',
        name: 'text-olive-900',
        desc: 'text-olive-400',
    },
    dark: {
        card: 'bg-olive-900 border border-olive-900',
        avatar: 'bg-olive-800',
        avatarText: 'text-[#f0e4df]',
        title: 'text-[#c4917f]',
        name: 'text-olive-50',
        desc: 'text-olive-500',
    },
}

const About = () => {
    return (
        <section id="equipo" className="w-full px-6 py-16">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-10">
                    <span className="mb-3 inline-block rounded-full bg-[#e8d5cf] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#8b5e52]">
                        El equipo
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight text-olive-900">
                        Nuestro equipo
                    </h2>
                    <p className="mt-1.5 text-sm text-olive-500">
                        Profesionales dedicadas a cuidar cada detalle
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {equipo.map((persona) => {
                        const s = accentMap[persona.accent]
                        return (
                            <div
                                key={persona.id}
                                className={`flex flex-col items-start gap-4 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${s.card}`}
                            >
                                {/* Avatar */}
                                {persona.image ? (
                                    <img
                                        src={persona.image}
                                        alt={persona.name}
                                        className="h-12 w-12 rounded-xl object-cover"
                                    />
                                ) : (
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${s.avatar} ${s.avatarText}`}>
                                        {persona.initials}
                                    </div>
                                )}

                                {/* Info */}
                                <div className="flex flex-col gap-0.5">
                                    <p className={`text-sm font-semibold leading-snug ${s.name}`}>
                                        {persona.name}
                                    </p>
                                    <p className={`text-[10px] font-semibold uppercase tracking-widest ${s.title}`}>
                                        {persona.title}
                                    </p>
                                    <p className={`mt-1.5 text-[11px] leading-relaxed ${s.desc}`}>
                                        {persona.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default About