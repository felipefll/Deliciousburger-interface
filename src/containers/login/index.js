import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import loginImage from '../../assets/login-image.png'
import logo from '../../assets/LOGO.png'
import Button from '../../components/button'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

function Login () {
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email válido').required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelo menos 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)!',
        error: 'Verifique seu email e senha'
      }
    )
    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={loginImage} alt="login-image" />
      <ContainerItens>
        <img src={logo} alt="logo-delicious" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 45, marginBottom: 25 }}>Sign In</Button>
        </form>

        <SignInLink>Não possui conta? <a>Sign Up</a>
        </SignInLink>

      </ContainerItens>
    </Container>
  )
}

export default Login
