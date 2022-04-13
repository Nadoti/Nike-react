import { ContainerStyles, ContentStyles } from "./styles";
import jordan from "../../../img/jordan.png"

export function BeMember(){
  return (
    <ContainerStyles>
      <h2>Be a Member</h2>
      <ContentStyles>
        <img src={jordan} alt="" />
        <h3>Where All Can Use</h3>
        <p>Things are better as a Nike Member. Get first and exclusive access to the newest styles & innovation, free shipping, birthday rewards and more.</p>
        <div>
          <a href="">Join Us</a>
          <a href="">Sign In</a>
        </div>
      </ContentStyles>
    </ContainerStyles>
  )
}