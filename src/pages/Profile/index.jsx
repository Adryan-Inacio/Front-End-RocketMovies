import { Container, Avatar, Form } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiArrowLeft, FiCamera, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/adryan-inacio.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiUser} />
        <Input placeholder="Senha atual" type="password" icon={FiUser} />
        <Input placeholder="Nova senha" type="password" icon={FiUser} />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
