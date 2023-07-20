import { useEffect, useState } from 'react';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from 'react-query';
import Cards from '../components/cards';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    InputBase,
    Badge,
    Container,
    Paper,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Link,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';


const queryClient = new QueryClient();

export default function Catalogo() {

    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);
    const [categorias, setCategorias] = useState({});
    const [filtro, setFiltro] = useState("all");
    const [carrito, setCarrito] = useState([])

    const valoresMenu = (datos) => {
        setCategorias(datos);
    };

    useEffect(() => {
        setCategorias(categorias);
    }, [categorias])

    return (
        <QueryClientProvider client={queryClient}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "red" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Venta por catalogo
                    </Typography>


                    <Container maxWidth="sm" style={{ marginTop: 20, marginBottom: 20 }}>
                        <Paper component="form" elevation={3}>
                            <InputBase
                                placeholder="Buscar productos..."
                                inputProps={{ 'aria-label': 'buscar productos' }}
                                style={{ paddingLeft: 10 }}
                                fullWidth
                            />
                            {/* <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton> */}
                        </Paper>
                    </Container>
                    <div>
                        <IconButton color="inherit">
                            <Badge badgeContent={0} color="error">
                                <Link href="/checkout" style={{ color: 'white' }}>
                                    <ShoppingCartIcon />
                                </Link>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <div style={{ width: 250 }}>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Inicio" onClick={() => setFiltro("all")} />
                        </ListItem>
                        {
                            (Object.keys(categorias).map((key) => (
                                <ListItem button>
                                    <ListItemText key={key} primary={key} onClick={() => setFiltro(key)} />
                                </ListItem>
                            )))
                        }
                    </List>
                </div>
            </Drawer>


            {/* llamado de los items para renderizacion de la pagina con los productos*/}
            <Items valoresMenu={valoresMenu} filtro={filtro} />
        </QueryClientProvider>
    );
}



function Items({ valoresMenu, filtro }) {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState({});


    const { data, isLoading, error } = useQuery('products', async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        return response.json();
    });

    useEffect(() => {
        if (data) {
            setProductos(data)
            const nuevasCategorias = data.reduce((acumulador, element) => {
                return {
                    ...acumulador,
                    [element.category]: element.category,
                };
            }, {});
            setCategorias(nuevasCategorias)
        }
    }, [data])

    useEffect(() => {
        if (data) { 
            const updatedItems = data.filter((item) => item.category === filtro);
            setProductos(updatedItems)
            if(filtro === "all"){
                setProductos(data)
            }
        }
    }, [filtro])

    valoresMenu(categorias)
    return (
        <>
            {productos.length === 0 ? <h3>Cargando...</h3> : (
                <Cards producto={productos} />
            )}
        </>
    )
}