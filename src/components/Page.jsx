import { Link } from 'react-router-dom'
import logo from '../assets/AimEdge.png'

export default function Page({ children }) {
    return (
        <>
            <header id='header'>
                <div id='logo'>
                    <img src={logo} alt="Aim Edge" />
                    <h4>AIM EdgeApps</h4>   
                </div>
                <nav>
                    <Link to='/' className="nav__link">Invoices</Link>
                </nav>
            </header>
            <section id='content'>
                { children }
            </section>
        </>
    )
}