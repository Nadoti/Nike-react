import { BrowserRouter, Routes,
  Route } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Teste } from "./components/Teste"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="teste" element={<Teste />}/>
        </Routes>
      </BrowserRouter>
      

      <GlobalStyle />
    </>
  )
}

export default App
