export default function DetailItem({ detail }) {
    return (
        <tr key={detail.detailID}>
            <td>{detail.detailID}</td>
            <td>{detail.invoiceID}</td>
            <td>{detail.productID}</td>
            <td>{detail.product?.product_name}</td>
            <td>{detail.quantity}</td>
            <td>{detail.total} USD</td>
        </tr>
    )
}