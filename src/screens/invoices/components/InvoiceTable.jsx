export default function InvoiceTable({ children }) {
    return (
        <table id="invoices__table">
            <thead>
                <tr>
                    <th>Invoice Number</th>
                    <th>Client</th>
                    <th>Date</th>
                    <th>Subtotal</th>
                    <th>Discount</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}