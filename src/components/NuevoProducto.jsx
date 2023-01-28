import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { crearNuevoProductoAction} from "../actions/productoActions";

export const NuevoProducto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cargando = useSelector(state => state.productos.loading);
  const errores = useSelector(state => state.productos.error);
  


  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  

  const handleSubmitProducto = (e) => {
    e.preventDefault();
    if(nombre.trim() === "" || precio <= 0){
return;
    }
    dispatch(crearNuevoProductoAction({
      nombre, precio
    }));
    navigate("/")
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo producto
            </h2>
            <form onSubmit={handleSubmitProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={e => setPrecio(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {cargando? <p>Cargando...</p>:null}
            {errores? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>:null}
          </div>
        </div>
      </div>
    </div>
  );
};
