import { useInit } from './hooks/useInit'
import { Invoices,CreateInvoice } from './screens'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  useInit()

  return (
    // <Invoices />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invoices/>} />
        <Route path="/create" element={<CreateInvoice/>} />
        <Route path="*" element={<div> Not found </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
