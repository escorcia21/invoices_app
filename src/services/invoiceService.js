import axios from 'axios'
import { useDispatch } from 'react-redux'
import { resetCart } from '../redux/slices'

// const dispatch = useDispatch()
const baseUrl = 'http://localhost:3000/EdgeAPP'

export async function fetcher(endPoint) {
    try {
        const res = await axios.get(`${baseUrl}${endPoint}`)
        if (res.status === 200) {
            const invoices = res.data
            return invoices.results
        }
    } catch (error) {
        console.log(error.message)
    }
}

export async function createDetailInvoice(data) {
    try {
        const res = await axios.post(`${baseUrl}/details`, data)
        if (res.status === 201) {
            return res
        }
    } catch (error) {
        console.log(error.message)
    }
}

export async function createInvoice(invoice) {
    try {
        const { clientID, date, discount } = invoice
        const res = await axios.post(`${baseUrl}/invoices`, {
            clientID,
            date,
            discount,
        })
        return res
    } catch (error) {
        console.log(error.message)
    }
}