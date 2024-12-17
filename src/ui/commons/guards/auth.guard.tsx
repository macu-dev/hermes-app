import { selectUserInfo } from '@/ui/redux/states/auth'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

// like a middleware
export const AuthGuard = () => {
  // verificar si el usuario esta logeado
  const userState = useSelector(selectUserInfo)

  return userState?.name ? <Outlet /> : <Navigate to='/login' replace />
}

export default AuthGuard
