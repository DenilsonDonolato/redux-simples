
export function changeMin(newMin) {
  return {
    type: 'NUM_MIN_CHANGE',
    payload: newMin
  }
}

export function changeMax(newMax) {
  return {
    type: 'NUM_MAX_CHANGE',
    payload: newMax
  }
}

