import React from 'react';
import Card from "./Card";

function Sorteio(props) {
  const {min, max} = props;
  const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
  return(
    <Card title="Sorteio dos Números" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
}

export default Sorteio;