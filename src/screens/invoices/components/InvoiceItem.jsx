import { formatDate } from '../../../utils/utils'

export default function InvoiceItem({ invoice }) {
    return (
        <tr>
            <td>{invoice.invoice_number}</td>
            <td>{invoice.clientID}</td>
            <td>{formatDate(invoice.date)}</td>
            <td>{invoice.subtotal} USD</td>
            <td>{invoice.discount}%</td>
            <td>{invoice.total} USD</td>
        </tr>
    )
}