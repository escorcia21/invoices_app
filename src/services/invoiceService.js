import axios from 'axios'

const baseUrl = 'http://localhost:3000/EdgeAPP'

export async function fetcher(endPoint) {
    try {
        const res = await axios.get(`${baseUrl}${endPoint}`)
        if (res.status === 200) {
            const invoices = res.data
            return invoices.results
        }
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}

export async function createDetailInvoice(data) {
    try {
        const res = await axios.post(`${baseUrl}/details`, data)
        if (res.status === 201) {
            return res
        }
    } catch (error) {
        if (error.response) {
            alert(error.response.data.error);
        } else {
            alert('Error', error.message);
        }
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
        if (error.response) {
            alert(error.response.data.error);
        } else {
            alert('Error', error.message);
        }
    }
}

export async function getInvoiceDetail(id) {
    try {
        const res = await axios.get(`${baseUrl}/details/${id}`)
        if (res.status === 200) {
            const { results } = res.data
            return results
        }
    } catch (error) {
        if (error.response) {
            alert(error.response.data.error);
        } else {
            alert('Error', error.message);
        }
    }
}