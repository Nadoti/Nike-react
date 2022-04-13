import { SectionStyles } from "./styles";
import imgFeatured1 from "../../../img/teste.jpg"
import imgFeatured2 from "../../../img/imageminformativo_2.png"

export function FeaturedFootwear() {
  return (
    <SectionStyles color={imgFeatured1} className={imgFeatured2} >
      <h2>Featured Footwear</h2>
      <div className="featured_container">
        <div className="featured_1">
          <p>Our jordan, everyone deserves to have</p>
          <a href="/">Shop</a>
        </div>
        <div className="featured_2">
          <p>The best Air Max for you</p>
          <a href="/">Shop</a>
        </div>
      </div>
    </SectionStyles>
  )
}