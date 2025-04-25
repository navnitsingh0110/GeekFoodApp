import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="nav-logo">
                    <a href="/"><img src="https://flowbite.com/docs/images/logo.svg" alt="GeekFoodLogo" /><span>GeekFoods</span></a>
                </div>
                <ul className="nav-links">
                    <li className='active'><Link to="/">Home</Link></li>
                    <li><Link to="/quotes">Quote</Link></li>
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