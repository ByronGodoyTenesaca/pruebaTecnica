import Link from 'next/link';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/index.module.css'

export default function Home() {

  return (
    <div>
      <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
          alt="First slide"
          style={{height:"100vh"}}
        />
        <Carousel.Caption>
        <h2 style={{"margin-bottom":"1rem"}}>Tu catalogo en linea</h2>
      <Link href="/catalogo" className={styles.boton}>Ir a catalogo</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
          style={{height:"100vh"}}
        />
        <Carousel.Caption>
        <h2 style={{"margin-bottom":"1rem"}}>Tu catalogo en linea</h2>
      <Link href="/catalogo" className={styles.boton}>Ir a catalogo</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
          alt="Third slide"
          style={{height:"100vh"}}
        />
        <Carousel.Caption>
        <h2 style={{"margin-bottom":"1rem"}}>Tu catalogo en linea</h2>
      <Link href="/catalogo" className={styles.boton}>Ir a catalogo</Link>
        </Carousel.Caption>
  </Carousel.Item>
    </Carousel> 
    </div>
  )
}
