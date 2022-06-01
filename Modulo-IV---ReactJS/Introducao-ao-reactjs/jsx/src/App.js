import React, { Component } from 'react';
import './App.css';
import Button from './Button'



// preciso criar os elementos do javascript fora da 
// function APP e depois chamar esses elementos entre
// chaves dentro do div className=APP

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
    }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }

}


export default App;


{/* ------PARTE II E PARTE III | INTRODUÇÃO AO REACTJS
import React from 'react';
import './App.css';
import Button from './Button

function sum(a, b) {
  alert(a + b)
}

const elemento = 'dio.m';

function App() {
  return (
    <div className="App">
      <h1 className="teste">Meu Primeiro React</h1>
      <Button onClick={() => sum(10, 20)} name="César Mattos" />
      <p>
      <Button onClick={() => sum(10, 20)} name="César Mattos" />
      </p>   
      <div>{elemento}</div>
    </div>)  
 }

 const element = 'dio.m'


export default App;  */}
