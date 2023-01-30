import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { eliminarProducto } from "../actions/productoActions";
export const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  const handleEliminar = (id) => {
    Swal.fire({
      title: 'estás seguro?',
      text: "El producto a eliminar no se puede recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(eliminarProducto(id));
      }
    })
    
  };
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleEliminar(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
