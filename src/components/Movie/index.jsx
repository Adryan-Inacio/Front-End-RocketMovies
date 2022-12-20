import { Container } from './styles'

import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

import { Tag } from '../Tag'

export function Movie() {
  return (
    <Container>
      <h1>Interestellar</h1>
      <div class="stars">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se...
      </p>

      <div class="tags">
        <Tag title="Ficção científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
      </div>
    </Container>
  )
}
