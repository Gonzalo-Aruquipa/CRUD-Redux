import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editarProducto } from "../actions/productoActions";

export const EditarProducto = () => {
  const producto = useSelector((state) => state.productos.productoEditar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [prod, setProd] = useState({
    nombre: "",
    precio: "",
  });
  useEffect(() => {
    setProd(producto);
  }, [producto]);

  const handleChange = (e) => {
    setProd({
      ...prod,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editarProducto(prod));
    navigate("/")
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={prod.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={prod.precio}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
