import { Metadata } from 'next'
import LoginForm from '@frontend/components/auth/LoginForm'

export const metadata: Metadata = {
  title: 'Iniciar Sesión | Narhub',
  description: 'Inicia sesión en tu cuenta de Narhub',
}

export default function LoginPage() {
  return <LoginForm />
}
