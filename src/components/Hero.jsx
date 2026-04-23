import hero from ".././assets/hero.png"

const Hero = () => {
    return (
        <section className="h-screen w-full">
            {/* imagen de fondo */}
            <div className="absolute  w-full h-full  ">
                <img src={hero} alt="hero" className="object-contain" />


            </div>
        </section>
    )
}

export default Hero