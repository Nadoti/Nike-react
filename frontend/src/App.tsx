import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
