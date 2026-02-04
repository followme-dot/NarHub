import { Metadata } from 'next'
import RegisterForm from '@frontend/components/auth/RegisterForm'

export const metadata: Metadata = {
  title: 'Crear Cuenta | Narhub',
  description: 'Crea tu cuenta en Narhub y accede al ecosistema de software empresarial',
}

export default function RegisterPage() {
  return <RegisterForm />
}
