import React from 'react';
import Card from "./Card";

function Media(props) {
  return(
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>5</strong>
        </span>
      </div>
    </Card>
  );
}

export default Media;