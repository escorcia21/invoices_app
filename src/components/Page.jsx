import { Link } from 'react-router-dom'

export default function Page({ children }) {
    return (
        <>
            <header id='header'>
                <nav>
                    <Link to='/' className="nav__link">Invoices</Link>
                    <Link to='/create' className="nav__link">Create Invoice</Link>
                </nav>
            </header>
            <section id='content'>
                { children }
            </section>
        </>
    )
}