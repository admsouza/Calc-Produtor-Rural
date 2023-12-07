
import React, {useState,} from 'react'



import './App.css';

const App = () => {

  // Calculo RAT

    const [valorbruto,setValorBruto] = useState (null)
    const [resultrat, setResultRat] = useState ()
    const [resultsenar, setResultSenar] = useState ()
    const [resultinss, setResultInss] = useState ()
    const [valorliquido, setvalorLiquido] = useState ()
    const [valorliq, setValorLiq] = useState ()

      
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

    const vlLiq= () => {

      const liq = valorbruto - (resultinss + resultrat +resultsenar)
      const formatLiq = liq.toFixed(2)
      setValorLiq(+formatLiq)

    }

      const valorLiquido = () => {
        const liquido =  valorbruto - (resultrat + resultinss +  resultsenar)
        const formatliquido = liquido.toFixed(2)
          setvalorLiquido(+formatliquido) 
    }

 
    
    const calcFinal = () => {

          calcular()
          calcularSenar()
          calcularInss()
          vlLiq()
          valorLiquido()
          
          

    }


  return (

    <div  className="App">

      <h1>Cálculo - Produtor Rural</h1>

      <label  className='name'>Valor Recebido</label>
        <input  required  placeholder="R$ 0,00" onBlur={ calcFinal }   className='' type="number" value={valorbruto} onChange={(e) => setValorBruto (+e.target.value)}/>

      <label className='name' >RAT 1% </label>
        <input  disabled   onBlur ={vlLiq} placeholder="R$ 0,00" className='' type="number" value= { resultrat  } onChange={(e) => setResultRat (e.target.value)}/>
  
      <label className='name'>SENAR 2% </label>
        <input  disabled placeholder="R$ 0,00" className='' type="number" value= { resultsenar  } onChange={(e) => setResultSenar (e.target.value)}/>

      <label className='name'> INSS 12% </label>
        <input disabled  placeholder="R$ 0,00" className='' type="number" value= { resultinss } onChange={(e) => setResultInss (e.target.value)}/>
      
      
      <h1 className='entrada'>Base de Calculo</h1>  
        <input disabled placeholder="R$ 0,00" className='entrada' type="number" value= { valorbruto } onChange={(e) => setValorBruto (e.target.value)}/>

     <h1 className='entrada'>Valor Líquido </h1>  
        <input disabled  placeholder="R$ 0,00" className='entrada' type="number" value= { valorliq } onChange={(e) => setValorLiq (e.target.value)}/>

    </div>
  );
}


export default App;
