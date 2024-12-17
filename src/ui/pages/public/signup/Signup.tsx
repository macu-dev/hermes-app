import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormInput from '@/ui/commons/components/FormInput'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '@/ui/redux/actions/auth'
import { AppDispatch } from '@/ui/redux/store'
import { selectAuthInfo } from '@/ui/redux/states/auth'
import { updateAlert } from '@/ui/redux/states/alert'

const Signup = () => {
  const dispatch = useDispatch<AppDispatch>()
  const authState = useSelector(selectAuthInfo)

  const formSchema = z
    .object({
      email: z.string().email('Debe ser un email'),
      password: z.string().min(5, 'Este campo es obligatorio'),
      confirmPassword: z.string().min(5, { message: 'Este campo es obligatorio' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'Passwords does not match',
    })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values

    try {
      await dispatch(registerUser({ email, password })).unwrap()

      dispatch(
        updateAlert({
          variant: 'success',
          title: 'Registro Exitoso',
          message: 'Tu cuenta ha sido creada con éxito.',
        }),
      )
    } catch (error) {
      dispatch(
        updateAlert({
          variant: 'success',
          title: 'Error en el Registro',
          message:
            typeof error === 'string' ? error : 'Hubo un problema al intentar crear tu cuenta.',
        }),
      )
      console.error('Error al registrar usuario:', error)
      //mensaje de error el back mandara codigo de error
    }
  }

  return (
    <div>
      <Form {...form}>
        <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput label='Email' name='email' />
          <FormInput label='Password' name='password' type='password' />
          <FormInput label='ConfirmPassword' name='confirmPassword' type='password' />
          <Button disabled={authState.loading} type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Signup
