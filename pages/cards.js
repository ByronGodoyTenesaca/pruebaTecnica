import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function Cards(props) {

  const [mostrarModal, setMostrarModal] = useState(false);
  const handleOpenModal = () => {
    console.log("entro");
    setMostrarModal(true);
  };

  const handleCloseModal = () => {
    setMostrarModal(false);
  };


  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: 20 }}>
        <Grid container spacing={5}>
          {props.producto.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto.id} style={{ cursor: "pointer" }}>
              <Card onClick={handleOpenModal}>
                <CardMedia
                  component="img"
                  alt={producto.title}
                  height="400"
                  image={producto.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.price} $
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Añadir al carrito</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Contenido del Modal</h2>
            <p>Aquí puedes colocar el contenido que desees mostrar en el modal.</p>
          </div>
        </div>
      )}

    </div>

  );
}
