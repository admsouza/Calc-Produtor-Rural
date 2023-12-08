import React, { useState } from "react";

import "./Rural.css";


const ProdutorRural = () => {

  const [valorbruto, setValorBruto] = useState(null);
  const [resultrat, setResultRat] = useState(null);
  const [resultsenar, setResultSenar] = useState(null);
  const [resultinss, setResultInss] = useState(null);
  const [valorliquido, setvalorLiquido] = useState(null);
  const [valorliq, setValorLiq] = useState(null);

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
    const inss = valorbruto * 0.12;
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

    <div className="boxcalculadora">

      <div className="vlrecebido">
        <label className="recebido">Valor Recebido (R$) = </label>
        <input
          required
          placeholder="Digite"
          onBlur={calcFinal}
          className="recebido"
          type="number"
          value={valorbruto}
          onChange={(e) => setValorBruto(+e.target.value)}
        />
      </div>

      <div className="box-base">
        <label className="name">Base de Cálculo  (R$) = </label>
        <input
          onBlur={vlLiq}
          placeholder="R$ 0,00"
          className="base"
          type="number"
          value={valorbruto}
          onChange={(e) => setValorBruto(e.target.value)}
        />
      </div>

      <div  className="box-senar">
      <label className="name">SENAR 2% = </label>
      <input
        disabled
        placeholder="R$ 0,00"
        className=""
        type="number"
        value={resultsenar}
        onChange={(e) => setResultSenar(e.target.value)}
      />
      </div>

  <div className="box-inss">
    
      <label className="name"> INSS 12%  (R$) = </label>
      <input
        disabled
        placeholder="R$ 0,00"
        className=""
        type="number"
        value={resultinss}
        onChange={(e) => setResultInss(e.target.value)}
      />
</div>
  <div className="box-rat">
      <label className="name">RAT 1%  (R$) =</label>
      <input
      className=""
        disabled
        placeholder="R$ 0,00"
        type="number"
        value={resultrat}
        onChange={(e) => setResultRat (e.target.value)}
      />
</div>
      
<div className="boxvalorliquido">
      <label className="entrada">
        <h1 className="vl">Valor Líquido (R$) = </h1>
      </label>
      <input
        className="valorliquido"
        disabled
        placeholder="R$ 0,00"
        
        type="number"
        value={valorliq}
        onChange={(e) => setValorLiq(e.target.value)}
      />
</div>
</div>
    </div>
  );
};

export default ProdutorRural;
