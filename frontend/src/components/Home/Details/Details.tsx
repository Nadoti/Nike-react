import cadastre1 from "../../../img/cadastre_1.png"
import cadastre2 from "../../../img/cadastre_2.png"
import cadastre3 from "../../../img/cadastre_3.png"
import { Container, Content } from "./styles"

export function Details() {

  return (
    <Container>
      <Content>
        <div>
          <img src={cadastre1} alt="" />
          <p>Exclusive Nike Shopping Perks</p>
        </div>
        <div>
          <img src={cadastre2} alt="" />
          <p>First & Exclusive Access</p>
        </div>
        <div>
          <img src={cadastre3} alt="" />
          <p>Member Rewards & Offers</p>
        </div>
      </Content>
    </Container>
  )
}