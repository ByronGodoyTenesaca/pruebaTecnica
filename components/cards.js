import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Box, Container, Modal } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';



export default function Cards(props) {

  const [open, setOpen] = React.useState(false);
  const [producto, setProducto] = useState([])
  const [carrito,setCarrito] = useState([]);

  useEffect(() => {
    setProducto(producto);
  }, [producto])

  const handleOpen = (prod) => {
    setProducto({
      ...producto, prod
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addCarrito = (prod) =>{
    let producto ={
      cantidad:1,
      id: prod.id,
      title:prod.title,
      price:prod.price,
    }
    setCarrito([...carrito,producto])
  }

  useEffect(()=>{
    setCarrito(carrito)
    localStorage.setItem("carrito",JSON.stringify(carrito))
  },[carrito])

  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: 20 }}>
        <Grid container spacing={5}>
          {props.producto.map((prod) => (
            <Grid item xs={12} sm={6} md={4} key={prod.id} style={{ cursor: "pointer" }}>
              <Card >
                <CardMedia
                  component="img"
                  alt={prod.title}
                  height="400"
                  image={prod.image}
                  onClick={() => { handleOpen(prod) }}
                />
                <CardContent onClick={() => { handleOpen(prod) }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {prod.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {prod.price} $
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>{addCarrito(prod)}}>Añadir al carrito</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Modal
        open={open}
        onClose={handleClose}
      >
          {
            producto.length === 0 ? <h2>no hay producto seleccionado</h2> : (
                <div style={{"background-color": "white",
                  height: "41rem",
                  width: "80%",
                  "text-align": "center",
                  "margin-left": "10%",}}>
                  <h1>{producto.prod.title}</h1>
                  <img src={producto.prod.image} alt={producto.prod.title} style={{width: "15rem", height: "50%"}} />
                  <h3>Descripción:</h3>
                  <p>{producto.prod.description}</p>
                  <h3>Precio: ${producto.prod.price}</h3>
                  <p>Calificación: {producto.prod.rating.rate}</p>
                </div>
            )
          }    
      </Modal>
    </div>
  );
}


