import { PrivateRoutes } from '@/ui/routes'
import { Navigate, Route } from 'react-router-dom'
import { lazy } from 'react'

const Dashboard = lazy(() => import('@/ui/pages/private/dashboard/Dashboard'))

const Private = () => {
  return (
    <>
      <Route element={<Navigate to={PrivateRoutes.DASHBOARD} />} path='/' />
      <Route element={<Dashboard />} path={PrivateRoutes.DASHBOARD} />
    </>
  )
}

export default Private
