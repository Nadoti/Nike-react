import { BeMember } from "./BeMember/BeMember";
import { BestSellers } from "./BestSellers/BestSellers";
import { Details } from "./Details/Details";
import { FeaturedFootwear } from "./FeaturedFootwear/FeaturedFootwear";
import { Main } from "./Main/Main";


export function Home() {
  return (
    <>
      <Main />
      <FeaturedFootwear />
      <BestSellers />
      <BeMember />
      <Details />
    </>
  )
}