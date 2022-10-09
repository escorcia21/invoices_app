import axios from 'axios'

const baseUrl = 'http://localhost:3000/EdgeAPP'

export async function fetcher(endPoint) {
    const res = await axios.get(`${baseUrl}${endPoint}`)
    if (res.status === 200) {
        const invoices = res.data
        return invoices.results
    }
    throw new Error('Unable to fetch invoices')
}