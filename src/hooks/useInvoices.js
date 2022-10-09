import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { invoiceService } from "../services/getInvoices"
import { getInvoices } from "../redux/slices"

export function useInvoices() {
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    async function fetchInvoices() {
        try {
            const invoices = await invoiceService()
            dispatch(getInvoices(invoices))
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchInvoices()
    }, [])

    return { error } 
}
