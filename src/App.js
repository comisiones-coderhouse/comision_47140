import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import MiCustomProvider from './components/MiContexto';

function App() {

  return (
    <BrowserRouter>
      <MiCustomProvider>
        <Header />
        <Main />
        <Footer />
      </MiCustomProvider>
    </BrowserRouter>
  );
}

export default App;





