import { ContainerStyles, ContentStyles } from "./styles";
import bestSellers1 from "../../../img/bestSelelers_1.png"
import bestSellers2 from "../../../img/bestSelelers_2.png"
import bestSellers3 from "../../../img/bestSelelers_3.png"

export function BestSellers() {

  return (
    <ContainerStyles>
      <h2>Best Sellers</h2>
      <ContentStyles>
        <div>
          <img src={bestSellers1} alt="" />
          <div>
            <h3>Nike Air Max White</h3>
            <p>$110</p>
          </div>
        </div>
        <div>
          <img src={bestSellers2} alt="" />
          <div>
            <h3>Nike Air Max Grey</h3>
            <p>$210</p>
          </div>
        </div>
        <div>
          <img src={bestSellers3} alt="" />
          <div>
            <h3>Nike Air Max Dawn</h3>
            <p>$170</p>
          </div>
        </div>
      </ContentStyles>
    </ContainerStyles>
  )
}