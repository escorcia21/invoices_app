import { InvoiceForm } from './components'
import './createInvoice.css'

export default function CreateInvoice() {
    return (
        <main id='create__screen'>
            <h1 id='create__title'> Create Invoice</h1>
            <InvoiceForm />
        </main>
    )
}