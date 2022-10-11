import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../utils/utils'
import { useDispatch,useSelector } from 'react-redux'
import { getDetails } from '../../../redux/slices'
import { getInvoiceDetail } from '../../../services/invoiceService'

export default function InvoiceItem({ invoice }) {
    const { isOpen } = useSelector(state => state.details)
    const dispatch = useDispatch()
    const id = useRef(invoice.invoice_number)

    async function handlePointer(e) {
        if (!isOpen) {
            const results = await getInvoiceDetail(id.current)
            dispatch(getDetails(results))
        }
    }

    return (
        <tr onClick={handlePointer}>
            <td>{invoice.invoice_number}</td>
            <td>{invoice.client_name}</td>
            <td>{formatDate(invoice.date)}</td>
            <td>{invoice.subtotal} USD</td>
            <td>{invoice.discount}%</td>
            <td>{invoice.total} USD</td>
        </tr>
    )
}