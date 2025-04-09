import './Navbar.css'
function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="nav-logo">
                    <a href="/"><img src="https://flowbite.com/docs/images/logo.svg" alt="GeekFoodLogo" /><span>GeekFoods</span></a>
                </div>
                <ul className="nav-links">
                    <li className='active'>Home</li>
                    <li>Quote</li>
                    <li>Resturants</li>
                    <li>Foods</li>
                    <li>Contact</li>
                </ul>
                <div className="get-started">
                    <button>Get Started</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar