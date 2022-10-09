import { useInvoices } from './hooks/useInvoices'
import { Invoices } from './screens'

function App() {
  const { error } = useInvoices()

  return (
    <Invoices />
  )
}

export default App
