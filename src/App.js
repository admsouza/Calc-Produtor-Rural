
import React, {useState} from 'react'
// import FormatNumber from './FormatNumber';

import './App.css';

const App = () => {

  // Calculo RAT

    const [valorbruto,setValorBruto] = useState (null )
    const [resultrat, setResultRat] = useState (null )
    const [resultsenar, setResultSenar] = useState (null)
    const [resultinss, setResultInss] = useState (null)
    const [valorliquido, setvalorLiquido] = useState (null)
    const [valorliq, setValorLiq] = useState (null)
    // const [mostrarliquidio, setmostrarLiquido] = useState (null)

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

      const valorLiquido = () => {
        const liquido =  valorbruto - (resultrat + resultinss +  resultsenar)
        const formatliquido = liquido.toFixed(2)
          setvalorLiquido(+formatliquido) 
    }

      const vlLiq= () => {

        const liq = valorbruto - resultinss - resultrat - resultsenar
        const formatLiq = liq.toFixed
        setValorLiq(+formatLiq)

      }
    
    const calcFinal = () => {

          calcular()
          calcularSenar()
          calcularInss()
          valorLiquido()
          vlLiq()
          

    }


  return (

    <div className="App">

      <h1>Cálculo - Produtor Rural</h1>
      <label className='name'>Valor Recebido</label>

      <input  placeholder="R$ 0,00" onBlur={calcFinal}   className='' type="number" value={valorbruto} onChange={(e) => setValorBruto (+e.target.value)}/>

      <label className='name' >RAT 1% </label>
      <input  placeholder="R$ 0,00" className='' type="number" value= { resultrat  } onChange={(e) => setResultRat (e.target.value)}/>
  
      <label className='name'>SENAR 2% </label>
      <input   placeholder="R$ 0,00" className='' type="number" value= { resultsenar  } onChange={(e) => setResultSenar (e.target.value)}/>

      <label className='name'> INSS 12% </label>
      <input   placeholder="R$ 0,00" className='' type="number" value= { resultinss } onChange={(e) => setResultInss (e.target.value)}/>
      
      
      <h1 className='entrada'>Base de Calculo</h1>  
     <input placeholder="R$ 0,00" className='entrada' type="number" value= { valorbruto } onChange={(e) => setValorBruto (e.target.value)}/>

     <h1 className='entrada'>Valor Líquido </h1>  
     <input   placeholder="R$ 0,00" className='entrada' type="number" value= { valorliquido } onChange={(e) => setvalorLiquido (e.target.value)}/>

    </div>
  );
}


export default App;
