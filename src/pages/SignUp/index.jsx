import { Container, Form, Background } from './styles'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Cria sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Entrar" />

        <div class="button-text">
          <Link to="/">
            <ButtonText title="Voltar para o login" />
          </Link>
        </div>
      </Form>

      <Background />
    </Container>
  )
}
