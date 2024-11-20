import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'

type FormInputProps = React.ComponentProps<'input'> & {
  label?: string
  name: string
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name, ...props }, ref) => {
    const form = useFormContext()

    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input {...field} {...props} ref={ref} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  },
)

FormInput.displayName = 'FormInput'

export default FormInput
