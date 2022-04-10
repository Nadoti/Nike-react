import tenisPrincipal from '../../../img/tenisPrincipal.png'
import tenisAzul from '../../../img/tenisAzul.png'
import tenisVerde from '../../../img/tenisVerde.png'
import tenisVermelho from '../../../img/tenisVermelho.png'
import { MainStyles } from './styles'

export function Main() {
  return(
    <MainStyles>
      <div className='info'>
        <h1>Nike <br /><span>Air Max</span> </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <a href="/product">Buy</a>
      </div>
      <figure>
        <img src={tenisPrincipal} alt="" />
        <div>
          <img src={tenisAzul} alt="" />
          <img src={tenisVerde} alt="" />
          <img src={tenisVermelho} alt="" />
        </div>
      </figure>
    </MainStyles>
  )
}