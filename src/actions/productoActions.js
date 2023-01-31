import axios from "axios";
import Swal from "sweetalert2";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
} from "../types";

export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch({
      type: AGREGAR_PRODUCTO,
      payload: true,
    });
    try {
      await axios.post("http://localhost:4000/productos", producto);
      dispatch({
        type: AGREGAR_PRODUCTO_EXITO,
        payload: producto,
      });
      Swal.fire("correcto", "El producto se agregó correctamente", "success");
    } catch (error) {
      dispatch({
        type: AGREGAR_PRODUCTO_ERROR,
        payload: true,
      });
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
};
export const obtenerProductosAction = () => {
  return async (dispatch) => {
    dispatch({
      type: COMENZAR_DESCARGA_PRODUCTOS,
      payload: true,
    });
    try {
      const productos = await axios.get("http://localhost:4000/productos");
      dispatch({
        type: DESCARGA_PRODUCTOS_EXITO,
        payload: productos.data,
      });
    } catch (error) {
      dispatch({
        type: DESCARGA_PRODUCTOS_ERROR,
        payload: true,
      });
    }
  };
};

export const eliminarProducto = (id) => {
  return async (dispatch) => {
    dispatch({
      type: OBTENER_PRODUCTO_ELIMINAR,
      payload: id,
    });
    try {
      await axios.delete(`http://localhost:4000/productos/${id}`);
      dispatch({
        type: PRODUCTO_ELIMINADO_EXITO,
      });
      Swal.fire("Eliminado!", "El producto ha sido eliminado", "success");
    } catch (error) {
      console.log(error);
      dispatch({
        type: PRODUCTO_ELIMINADO_ERROR,
        payload: true,
      });
    }
  };
};

export const obtenerEditar = (prod) => {
  return (dispatch) => {
    dispatch({
      type: OBTENER_PRODUCTO_EDITAR,
      payload: prod,
    });
  };
};

export const editarProducto = (producto) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: COMENZAR_EDICION_PRODUCTO,
      });

      await axios.put(
        `http://localhost:4000/productos/${producto.id}`,
        producto
      );
      dispatch({
        type: PRODUCTO_EDITADO_EXITO,
        payload: producto,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: PRODUCTO_EDITADO_ERROR,
        payload: true,
      });
    }
  };
};
