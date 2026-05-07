import logo from "../assets/logo-blanco.png"
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4  text-[#848a48] rounded-t-2xl">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <ul className="flex justify-between items-center gap-4">
                <li><a href="#services">Servicios</a></li>
                <li><a href="#equipo">Nosotras</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <button>
                <a href="#turnos">Turnos</a>
            </button>
        
        </nav>
    )
}

export default Navbar