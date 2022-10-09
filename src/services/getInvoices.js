export async function invoiceService() {
    const res = await fetch('http://localhost:3000/EdgeAPP/invoices/')
    if (res.status === 200) {
        const invoices = await res.json()
        return invoices.results
    }
    throw new Error('Unable to fetch invoices')
}