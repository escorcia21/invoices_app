import { NewButton, InvoiceTable, InvoiceItem } from './components'
import { useSelector } from 'react-redux'
import './invoices.css'

export default function Invoices() {
    const invoices = useSelector(state => state.invoices)

    return (
        <main id='invoices__screen'>
            <NewButton />
            <InvoiceTable> 
                {
                    invoices.map(invoice => (
                        <InvoiceItem key={invoice.id} invoice={invoice} />
                    ))
                }
            </InvoiceTable>
        </main>
    )
}