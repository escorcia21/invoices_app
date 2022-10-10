import { NewButton, InvoiceItem } from './components'
import { Table } from '../../components'
import { useSelector } from 'react-redux'
import './invoices.css'

const headers = ['Invoice Number', 'Client', 'Date', 'Subtotal', 'Discount', 'Total']

export default function Invoices() {
    const invoices = useSelector(state => state.invoices)

    return (
        <main id='invoices__screen'>
            <NewButton />
            <Table headers={headers}> 
                {
                    invoices.map(invoice => (
                        <InvoiceItem key={invoice.id} invoice={invoice} />
                    ))
                }
            </Table>
        </main>
    )
}