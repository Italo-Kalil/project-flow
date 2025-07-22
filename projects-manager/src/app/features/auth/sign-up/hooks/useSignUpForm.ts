import { useForm } from "react-hook-form";
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const signupSchema = z.object({
  email: z.string().email('e-mail invalid format'),
  password: z.string().min(6,'should have 6 characters at least'),
  confirmPassword: z.string().min(6,'Passwords have been equal'),
}).refine(data => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'The passwords is not equals',
})

export default function useSignUpForm() {
  const { register } = useForm();
  return {};
}
