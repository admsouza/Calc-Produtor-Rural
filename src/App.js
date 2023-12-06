
import React, {useState} from 'react'
// import FormatNumber from './FormatNumber';

import './App.css';

const App = () => {

  // Calculo RAT

    const [valorbruto,setValorBruto] = useState (Number )
    const [resultrat, setResultRat] = useState (Number )
    const [resultsenar, setResultSenar] = useState (Number)
    const [resultinss, setResultInss] = useState (Number)
    const [valorliquido, setvalorLiquido] = useState (Number)
 
    const calcular = () => {
      const rat = valorbruto * 0.01
      const formatrat = rat.toFixed(2)
      setResultRat(+formatrat)
      const formatvalorbruto = valorbruto.toFixed(2)
      setValorBruto(+formatvalorbruto)
      
    }
 
    const calcularSenar = () => {
      const senar = valorbruto * 0.02
      const formatsenar = senar.toFixed(2)
      setResultSenar(+formatsenar) 

    }
    const calcularInss = () => {
      const inss = valorbruto * 0.12
      const formatinss = inss.toFixed(2)
      setResultInss(+formatinss) 
    }
    const calcFinal = () => {

          calcular()
          calcularSenar()
          calcularInss()
          valorLiquido()
          

    }

const valorLiquido = () => {
    const liquido =  valorbruto - (resultrat + resultinss +  resultsenar)
    const formatliquido = liquido.toFixed(2)
      setvalorLiquido(+formatliquido) 
}


  return (

    <div className="App">

      <h1>Cálculo - Produtor Rural</h1>
      <label>Valor Recebido</label>

      <input  onBlur={calcFinal}   className='' type="number" value={valorbruto} onChange={(e) => setValorBruto (+e.target.value)}/>

      <label >RAT 1% </label>
      <input className='' type="number" value= { resultrat  } onChange={(e) => setResultRat (e.target.value)}/>
  
      <label>SENAR 2% </label>
      <input  className='' type="number" value= { resultsenar  } onChange={(e) => setResultSenar (e.target.value)}/>

      <label>INSS 12% </label>
      <input  className='' type="number" value= { resultinss } onChange={(e) => setResultInss (e.target.value)}/>
      
      <button onClick= {valorLiquido} >Calcular Líquido</button>   
     <input onBlur= {valorLiquido} className='entrada' type="number" value= { valorliquido } onChange={(e) => setvalorLiquido (+e.target.value)}/>
     
 <button className='resetar' onClick= {valorLiquido} >Resetar</button>   
    </div>
  );
}


export default App;
