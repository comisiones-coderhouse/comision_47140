import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import MiCustomProvider from './components/MiContexto';
import { createContext } from 'react';
import { Toaster } from 'sonner';

export const contextoNuevo = createContext()
const Provider = contextoNuevo.Provider

function App() {

  const valorDelContexto = {
    carrito: [],
    cantTotal: 0,
    nombre: "Horacio",
    saludar: () => {
      console.log("Hola desde el contexto")
    }
  }


  return (
    <BrowserRouter>
      <MiCustomProvider>
        <Provider value={valorDelContexto}>
          <Header />
          <Toaster position='top-right' />
          <Main />
          <Footer />
        </Provider>
      </MiCustomProvider>
    </BrowserRouter>

  );
}

export default App;