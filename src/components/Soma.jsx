import React from 'react';
import Card from "./Card";

function Soma(props) {
  const {min, max} = props;
  return(
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(min+max)}</strong>
        </span>
      </div>
    </Card>
  );
}

export default Soma;