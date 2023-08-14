import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import MainConChildren from './components/MainConChildren';
import MainConRender from './components/MainConRender';


/* class App extends React.Component {

  constructor(){
    this.state = {}
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  shouldComponentUpdate(){}
 
  render(){
    return (
      <>
        <Header />
        <Main nombre="horacio" edad={33} />
        <Footer />
      </>
    );
  }
}
 */












function App() {

  //vista
  return (
    <>
      <Header />
      <Main nombre="horacio" edad={33} />
      <Footer />
    </>
  );
}

export default App;





