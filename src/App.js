import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;





