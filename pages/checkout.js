import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function CheckOut() {

  const [productos, setProductos] = useState([])
  const [varibaleSuma, setVariableSuma] = useState(0)

  function suma (prod){
    let val= 0;
    prod.map((el)=>{
      val+=el.price;
    })
    return val;
  }

  useEffect(() => {
    const datos = (localStorage.getItem("carrito"));
    if (datos) {
      const parsedData = JSON.parse(datos);
      setProductos(parsedData)
      const v=suma(parsedData)
      setVariableSuma(v);
    }
  },[])


  const handleRemoveItem = (productId) => {
    // Implementa la lógica para eliminar el producto con el ID dado
    const updatedItems = productos.filter((item) => item.id !== productId);
    setProductos(updatedItems)
    const v=suma(updatedItems)
    setVariableSuma(v);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "red" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Typography variant="h6">
            Productos del carrito
          </Typography>
        </Toolbar>
      </AppBar>

      <div>
        <table className="table" style={{
          "width": "100%",
          "text-align": "center"
        }}>
          <thead style={{
            backgroundColor:"coral"
          }}>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {
              productos.map((el) => (
                <tr>
                  <th >{el.id}</th>
                  <td>{el.title}</td>
                  <td>{el.cantidad}</td>
                  <td>{el.price}</td>

                  <td><button className="btn btn-primary" onClick={() => { handleRemoveItem(el.id) }}>eliminar</button></td>
                </tr>
              ))
            }

          </tbody>
        </table>

      </div >



      <div>
        <p className="h4">Total a pagar: {varibaleSuma}</p>
      </div>


      <Link className="btn btn-outline-success" href="/">Comprar</Link>
    </>
  )
}