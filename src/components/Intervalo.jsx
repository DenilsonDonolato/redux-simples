import "./Intervalo.css";
import { connect } from 'react-redux';
import React from 'react';
import Card from "./Card";
import { changeMax, changeMin } from "../store/actions/numeros";

function Intervalo(props) {
  const {min, max} = props;
  const {setMin, setMax} = props;

  return(
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" value={min} onChange={e => setMin(+e.target.value)} />
        </span>
        <span>
          <strong>Máximo</strong>
          <input type="number" value={max} onChange={e => setMax(+e.target.value)} />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setMin(newMin) {
      const action = changeMin(newMin)
      dispatch(action)
    },
    setMax(newMax) {
      const action = changeMax(newMax)
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intervalo);