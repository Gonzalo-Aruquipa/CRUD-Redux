import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

export const mostrarAlerta = (alerta) => {
  return (dispatch) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: alerta,
    });
  };
};

export const ocultarAlerta = () => {
  return (dispatch) => {
    dispatch({
      type: OCULTAR_ALERTA,
    });
  }
}
