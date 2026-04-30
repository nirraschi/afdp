
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4  text-[#848a48] rounded-t-2xl">
            <h1>My Website</h1>
            <ul className="flex justify-between items-center gap-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Sign Up</button>
        
        </nav>
    )
}

export default Navbar