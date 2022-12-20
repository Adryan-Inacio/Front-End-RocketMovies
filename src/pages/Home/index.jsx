import { Container, SubHeader, Content } from './styles'

import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { Button } from '../../components/Button'

import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <Header />

      <SubHeader>
        <div class="sub-header">
          <h1>Meus filmes</h1>

          <Link to="/new">
            <Button title="Adicionar filme" icon={FiPlus} />
          </Link>
        </div>
      </SubHeader>

      <main>
        <Content>
          <div class="movies">
            <Link to="/details/1">
              <Movie />
            </Link>
            <Link to="/details/2">
              <Movie />
            </Link>
            <Link to="/details/3">
              <Movie />
            </Link>
            <Link to="/details/4">
              <Movie />
            </Link>
            <Link to="/details/5">
              <Movie />
            </Link>
          </div>
        </Content>
      </main>
    </Container>
  )
}
