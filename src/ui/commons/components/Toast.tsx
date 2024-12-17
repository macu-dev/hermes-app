import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { resetAlert, selectAlertInfo } from '@/ui/redux/states/alert'
import { AlertCircle, CircleCheckBig, CircleX } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const iconsToast = {
  error: <CircleX />,
  success: <CircleCheckBig />,
  warning: <AlertCircle />,
  default: null,
}

const Toast = () => {
  const alertInfo = useSelector(selectAlertInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    if (alertInfo.variant) {
      const timer = setTimeout(() => {
        dispatch(resetAlert())
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [alertInfo, dispatch])

  return (
    <Alert className={!alertInfo.variant ? 'invisible' : ''} variant={alertInfo.variant}>
      {iconsToast[alertInfo.variant || 'default']}
      <div className='ml-[5px]'>
        <AlertTitle>{alertInfo.title}</AlertTitle>
        <AlertDescription>{alertInfo.message}</AlertDescription>
      </div>
    </Alert>
  )
}

export default Toast
