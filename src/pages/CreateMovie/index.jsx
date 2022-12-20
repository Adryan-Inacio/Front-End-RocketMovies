import { Container } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { TagItem } from '../../components/TagItem'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Link } from 'react-router-dom'

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <div class="sub-header">
          <Link to="/">
            <ButtonText title="Voltar" />
          </Link>
          <h1>Novo filme</h1>
        </div>

        <div class="title-note">
          <Input type="text" placeholder="Título" />
          <Input
            type="number"
            placeholder="Sua nota (de 0 a 5)"
            min="1"
            max="5"
          />
        </div>

        <Textarea name="comments" placeholder="Observações" />

        <div class="tags">
          <h2>Marcadores</h2>

          <div class="tags-edit">
            <TagItem value="React" />
            <TagItem isNew placeholder="Novo marcador" />
          </div>
        </div>

        <div class="buttons">
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>
      </main>
    </Container>
  )
}
