import { useInit } from './hooks/useInit'
import { Invoices,CreateInvoice, InvoiceDetail } from './screens'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page } from './components'
import { useSelector } from 'react-redux'

function App() {
  const { isOpen } = useSelector(state => state.details)
  useInit()

  return (
    <BrowserRouter>
      <>
        { isOpen && <InvoiceDetail/> }
        <Page>
            <Routes>
              <Route path="/" element={<Invoices/>} />
              <Route path="/create" element={<CreateInvoice/>} />
              <Route path="*" element={<div> Not found </div>} />
            </Routes>
        </Page>
      </>
    </BrowserRouter>
  )
}

export default App
