import { Link } from 'react-router-dom'
import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>
        <input type="text" placeholder="Pesquisar pelo título" />
        <Profile>
          <div>
            <Link to="/profile">
              <strong>Adryan Inacio</strong>
            </Link>
            <Link to="/login">
              <span>Sair</span>
            </Link>
          </div>

          <Link class="image" to="/profile">
            <img
              src="https://github.com/adryan-inacio.png"
              alt="Foto do usuário"
            />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}
