import React from 'react';
import ReactDOM from "react-dom/client";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => (
    <div>
        César Henrique - React/Webpack
       {hasCustomer && (
       <div>
           Clique no botão abaixo para visualizar o histórico dos Clientes
           <br />
           {buttonA}
        </div> 
       )}
    </div>
)


export default App

