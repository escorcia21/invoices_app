import { useInit } from './hooks/useInit'
import { Invoices } from './screens'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  useInit()

  return (
    // <Invoices />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invoices/>} />
        <Route path="/create" element={<div> hola </div>} />
        <Route path="*" element={<div> Not found </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
