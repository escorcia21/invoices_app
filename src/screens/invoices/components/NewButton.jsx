import { Link } from "react-router-dom"
export default function NewButton() {
    return (
        <Link id="invoices__button" to="/create">
            New Invoice
        </Link>
    )
}