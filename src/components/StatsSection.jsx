import { useEffect, useRef, useState } from "react";

const stats = [
    {
        value: 240,
        label: "Clientas Felices",
        suffix: "+",
    },
    {
        value: 20,
        label: "Años de Experiencia",
        suffix: "+",
    },
    {
        value: 500,
        label: "Servicios Realizados",
        suffix: "+",
    },
];

function Counter({ end, duration = 1800, suffix = "" }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    const frameRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                } else {
                    setStarted(false);
                    setCount(0);

                    // 👇 cancelamos animación si estaba corriendo
                    if (frameRef.current) {
                        cancelAnimationFrame(frameRef.current);
                    }
                }
            },
            { threshold: 0.4 }
        );

        const node = ref.current;
        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    useEffect(() => {
        if (!started) return;

        let startTime = null;

        const animate = (time) => {
            if (!startTime) startTime = time;

            const progress = time - startTime;
            const percentage = Math.min(progress / duration, 1);

            const value = Math.floor(percentage * end);
            setCount(value);

            if (percentage < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [started, end, duration]);
    return (
        <div ref={ref} className="text-center">
            <h3 className="text-5xl md:text-5xl font-title  ">
                {count}
                {suffix}
            </h3>
        </div>
    );
}

export default function StatsSection() {
    return (
        <section className="w-full h-[300px]  bg-white flex items-start justify-center">
            <div className="max-w-6xl mx-auto rounded p-10 md:p-10 ">


                <div className="grid grid-cols-1 md:grid-cols-3  p-4 rounded-2xl gap-5 md:gap-4">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="text-olive-800"
                        >
                            <Counter end={item.value} suffix={item.suffix} />

                            <p className="mt-4 text-center font-body md:text-sm text-md uppercase text-olive-600 ">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
