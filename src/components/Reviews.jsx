import { Star } from "lucide-react"

const reviews = [
    {
        name: "Silvia Lacroix",
        review: "Un lugar sencillo atendido por profesionales de 1er nivel. Atención cordial y asesoramiento claro y preciso.",
        image: "https://lh3.googleusercontent.com/a/ACg8ocISQ-YeGSDhwEmQwsgaiG2YqCQsqS8eH8r1QX6Lfo6SF2Oj_Q=w65-h65-p-rp-mo-ba4-br100",
        accent: "sage",
    },
    {
        name: "Romina García Fleury",
        review: "Excelente atención, super profesionales y una calidez humana destacable. La mejor opción para sentirte mimada.",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWi5j0xHMI4pZf3OX8jYlN_NOMgHY77IzW8UoT0PTVKbwIahFA=w65-h65-p-rp-mo-br100",
        accent: "dark",
    },
    {
        name: "Gisele Orquera",
        review: "Excelente lugar y magnífica atención. Todos los servicios son inmejorables: microblading, pestañas y más.",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVdYvykwDqjVFokhMBoc_fJxVGY0UDEWHZXBrV_0Lxmqd4sZyjG4A=w65-h65-p-rp-mo-ba3-br100",
        accent: "sage",
    },
    {
        name: "Noe",
        review: "Super profesionales las chicas. Hermosos trabajos. Lo mejor de lo mejor en micro súper realista de cejas.",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjU1NrgPQ80GAQ0ra_sc8CQe6jXtTM9VfvGgEe7RQWIoADUCmW_j=w65-h65-p-rp-mo-ba3-br100",
        accent: "rose",
    },
]

const accentMap = {
    sage: {
        card: "bg-white border border-olive-200",
        name: "text-olive-900",
        review: "text-olive-500",
        badge: "bg-[#dde8dc] text-[#4a7248]",
    },
    rose: {
        card: "bg-white border border-olive-200",
        name: "text-olive-900",
        review: "text-olive-500",
        badge: "bg-[#f0e4df] text-[#9b6b5e]",
    },
    dark: {
        card: "bg-olive-900 border border-olive-900",
        name: "text-olive-50",
        review: "text-olive-500",
        badge: "bg-olive-800 text-[#c4917f]",
    },
}

const Reviews = () => {
    return (
        <section id="reviews" className="w-full bg-white px-6 py-16 rounded-b-2xl">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-3">
                    {/* Estrellas + contador */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <span className="text-xs text-olive-400">+100 reseñas en Google</span>
                    </div>

                    {/* Título + CTA */}
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <h2 className="text-4xl font-bold leading-tight tracking-tight text-olive-900">
                            Lo que dicen<br />nuestras clientas
                        </h2>
                        <a
                            href="https://g.page/r/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-olive-900 px-5 py-2.5 text-xs font-bold tracking-wide text-olive-50 transition-all duration-200 hover:bg-olive-700"
                        >
                            Dejá tu reseña
                            <span className="text-sm leading-none">→</span>
                        </a>
                    </div>
                </div>

                {/* Grid de reviews */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {reviews.map((r) => {
                        const s = accentMap[r.accent]
                        return (
                            <div
                                key={r.name}
                                className={`flex flex-col gap-4 rounded-2xl border p-5 ${s.card}`}
                            >
                                {/* Avatar + nombre */}
                                <div className="flex items-center gap-2.5">
                                    <img
                                        src={r.image}
                                        alt={r.name}
                                        className="h-9 w-9 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className={`text-xs font-semibold leading-snug ${s.name}`}>
                                            {r.name}
                                        </p>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Texto */}
                                <p className={`flex-1 text-[11px] leading-relaxed ${s.review}`}>
                                    "{r.review}"
                                </p>

                                {/* Badge fuente */}
                                <span className={`w-fit rounded-full px-2.5 py-0.5 text-[10px] font-medium ${s.badge}`}>
                                    Google
                                </span>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Reviews