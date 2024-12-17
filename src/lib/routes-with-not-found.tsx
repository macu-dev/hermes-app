import { NotFound } from '@/ui/pages/notFound'
import { Route, Routes } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route element={<NotFound />} path='*' />
    </Routes>
  )
}

export default RoutesWithNotFound
