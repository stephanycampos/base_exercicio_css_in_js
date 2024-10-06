import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle from './global' // Importando o GlobalStyle

function App() {
  return (
    <>
      <GlobalStyle /> {/* Aplicando os estilos globais */}
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
