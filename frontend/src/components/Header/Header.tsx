import logo from '../../img/logo.svg'
import user from '../../img/user.svg'
import cart from '../../img/cart.svg'
import { HeaderStyles, ContentStyles } from './styles'
export function Header() {


  return (
    <HeaderStyles>
      <ContentStyles>
        <img src={logo} alt="Nike" />
        <nav>
          <ul>
            <li><a href="/#/">product</a></li>
            <li><a href="/#/">equipament</a></li>
            <li><a href="/#/">about</a></li>
          </ul>
        </nav>
        <div>
          <a href="/#/"><img src={user} alt="" /></a>
          <a href="/#/"><img src={cart} alt="" /></a>
        </div>
      </ContentStyles>
    </HeaderStyles>
  )
}