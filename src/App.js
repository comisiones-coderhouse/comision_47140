import Header from './Header'
//Mi Primer Componente! 

/* 

Componentes : 

1 - Son funciones
2 - Van en mayuscula
3 - Todos tienen return
4 - Siempre deben retornar un solo elemento 

*/



function App() {
  
  let nombre = "Horacio"

  //Vista
  return (
    
    <>
      {/* Comentarios en JSX */}

      {/* <header id="header" className="header">
        <h1>Mi Pagina</h1>
      </header> */}


      {/*  Header()  */}
      <Header />

      <main>
        <h2>Home</h2>
        <p>Bienvenido {nombre}</p>
      </main>

      <footer>
        <p>Copyright &copy;</p>
      </footer>

    </>
   
  );
}

export default App;