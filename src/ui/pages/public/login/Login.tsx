'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormInput from '@/ui/commons/components/FormInput'
import { Link } from 'react-router-dom'

const Login = () => {
  const formSchema = z.object({
    email: z.string().email('Debe ser un email'),
    password: z.string().min(5, 'Este campo es obligatorio'),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>
      <Form {...form}>
        <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput label='Email' name='email' />
          <FormInput label='Password' name='password' type='password' />
          <Button type='submit'>submit</Button>
        </form>
      </Form>
      <p>No tienes una cuenta?</p>
      <Link to='/signup'>Crear cuenta</Link>
    </div>
  )
}

export default Login
