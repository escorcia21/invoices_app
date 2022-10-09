import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { fetcher } from "../services/invoiceService"
import { getInvoices,getClients,getProducts } from "../redux/slices"

export function useInit() {
    const dispatch = useDispatch()

    async function fetchInvoices() {
        try {
            const invoices = await fetcher('/invoices')
            const products = await fetcher('/products')
            const clients = await fetcher('/clients')
            dispatch(getProducts(products))
            dispatch(getClients(clients))
            dispatch(getInvoices(invoices))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchInvoices()
    }, [])
}
