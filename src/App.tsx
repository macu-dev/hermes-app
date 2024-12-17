import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoute } from '@/ui/routes'
import AuthGuard from '@/ui/commons/guards/auth.guard'
import RoutesWithNotFound from './lib/routes-with-not-found'
import { Suspense, lazy } from 'react'
import Layout from './ui/pages/public/layout'
import SkeletonPage from './ui/commons/components/SkeletonPage'
import Toast from './ui/commons/components/Toast'

//si aun no me logeado se tendria que cargar las otras rutas, por ejemplo el dashboar
//para eso deberiamos usar Suspense!!

const Login = lazy(() => import('@/ui/pages/public/login/Login'))
const Signup = lazy(() => import('@/ui/pages/public/signup/Signup'))
const Private = lazy(() => import('@/ui/pages/private/private'))

function App() {
  return (
    <div className='app'>
      <Suspense fallback={<SkeletonPage />}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route element={<Navigate to={PrivateRoutes.DASHBOARD} />} path='/' />
            <Route element={<Layout />}>
              <Route element={<Signup />} path={PublicRoute.SIGNUP} />
              <Route element={<Login />} path={PublicRoute.LOGIN} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route element={<Private />} path={PrivateRoutes.DASHBOARD} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
      <Toast />
    </div>
  )
}

export default App
