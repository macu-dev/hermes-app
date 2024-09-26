import './App.css'
import { Login } from './ui/pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './ui/pages/notFound'
import Dashboard from './ui/pages/dashboard/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path='/' />
          <Route element={<NotFound />} path='*' />
          <Route element={<Dashboard />} path='/dashboard' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
