import {useState} from 'react';

function Smartcounter(){
    // retorna um vetor
    // onde o vetor retorna uma variável stateful, que guarda o estado do elemento
    //com uma função amarrada a essa variável  que atualiza esse valor
    
    const [quantity, upQuantity] = useState(1);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity +1)}>Aumentar</button>
        </>
    )

}

export default Smartcounter;