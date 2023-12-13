import React, { useState,  } from "react";
import "./Rural.css";


const ProdutorRural = () => {
  const [valorbruto, setValorBruto] = useState();
  const [resultrat, setResultRat] = useState();
  const [resultsenar, setResultSenar] = useState();
  const [resultinss, setResultInss] = useState();
  const [valorliquido, setvalorLiquido] = useState();
  const [valorliq, setValorLiq] = useState();

  const calcular = () => {
    const rat = valorbruto * 0.01;
    const formatrat = rat.toFixed(2);
    setResultRat(+formatrat);
    const formatvalorbruto = valorbruto.toFixed(2);
    setValorBruto(+formatvalorbruto);
  };


  const calcularSenar = () => {
    const senar = valorbruto * 0.02;
    const formatsenar = senar.toFixed(2);
    setResultSenar(+formatsenar);
  };
  const calcularInss = () => {
    const inss = valorbruto * 0.012;
    const formatinss = inss.toFixed(2);
    setResultInss(+formatinss);
  };

  const vlLiq = () => {
    const liq = valorbruto - (resultinss + resultrat + resultsenar);
    const formatLiq = liq.toFixed(2);
    setValorLiq(+formatLiq);
  };

  const valorLiquido = () => {
    const liquido = valorbruto - (resultrat + resultinss + resultsenar);
    const formatliquido = liquido.toFixed(2);
    setvalorLiquido(+formatliquido);
  };

  const calcFinal = () => {
    calcular();
    calcularSenar();
    calcularInss();
    vlLiq();
    valorLiquido();
  };
  
 
    
  return (

 
    <div className="App">
        
      <h1>Cálculo - Produtor Rural</h1>
      <div className="vlrecebido">
      
        <label className="recebido">Valor Recebido (R$)</label>
        <input
          required
          placeholder="Insira o valor"
          onBlur={calcFinal}
          className="recebido"
          type="number"
          value={valorbruto}
          onChange={(e) => setValorBruto(+e.target.value)}
        />
      </div>
       <label className="entrada">
          <h1 className="vl'">Valor Líquido (R$)</h1>
        </label>
        <input
          className="valorliquido"
          disabled
          placeholder="R$ 0,00"
          type="number"
          value={valorliq}
          onChange={(e) => setValorLiq(e.target.value)}
          id="reset"
        />
      <div className="boxcalculadora">
        <div className="boxbase">
          <label className="name">Base de Cálculo (R$) = </label>
          <input
            onBlur={vlLiq}
            placeholder="R$ 0,00"
            className="base"
            type="number"
            value={valorbruto}
            onChange={(e) => setValorBruto(e.target.value)}
          />
        </div>
        <div className="boxsenar">
          <label className="name">SENAR 2%  (R$)  = </label>
          <input
            disabled
            placeholder="R$ 0,00"
            className=""
            type="number"
            value={resultsenar}
            onChange={(e) => setResultSenar(e.target.value)}
          />
        </div>

        <div className="boxinss">
          <label className="name"> INSS 1.2% (R$) = </label>
          <input
            disabled
            placeholder="R$ 0,00"
            className=""
            type="number"
            value={resultinss}
            onChange={(e) => setResultInss(e.target.value)}
          />
        </div>
        <div className="boxrat">
          <label className="name">RAT 1% (R$) =  </label>
          <input
            className=""
            disabled
            placeholder="R$ 0,00"
            type="number"
            value={resultrat}
            onChange={(e) => setResultRat(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProdutorRural;
