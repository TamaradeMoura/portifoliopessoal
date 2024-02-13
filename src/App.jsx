import Contatos from "./components/Contato"
import Header from "./components/Header"
import Hero from "./components/hero"
import Projetos from "./components/Projetos"
import Sobre from "./components/Sobre"
import Tech from "./components/Tech"

import EstiloGlobal from "./global"



function App() {

  return (
    <>
    <EstiloGlobal />
    <Header />
    <Hero />
    <Sobre />
    <Projetos />
    <Tech />
    <Contatos />
    </>
  )
}

export default App
