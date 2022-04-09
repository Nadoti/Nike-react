import logo from '../../img/logo.svg'
import user from '../../img/user.svg'
import cart from '../../img/cart.svg'
import { HeaderStyles, ContentStyles } from './styles'
import React from 'react'

export function Header() {

  const [active, setActive] = React.useState(false)

  function toggleMode() {
    setActive(!active)
  }

  return (
    <HeaderStyles>
      <ContentStyles>
       <a href="teste"><img src={logo} alt="" /></a>
       <nav>
         <button className='btn_mobile' onClick={toggleMode}>Menu</button>
         <ul className={active ? 'active': ''}>
           <li><a href='/'>product</a></li>
           <li><a href='/'>equipament</a></li>
           <li><a href='/'>about</a></li>
           <div>
             <a href="/"><img src={user} alt="" /></a>
             <a href="/"><img src={cart} alt="" /></a>
           </div>
         </ul>
       </nav>
      </ContentStyles>
    </HeaderStyles>
  )
}