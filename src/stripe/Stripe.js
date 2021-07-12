import React, { useState, useEffect} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import STRIPE_KEYS from "./stripeKeys";

const estilo = {
    marginLeft: "45%",
    background: "gray",
    width: "30%",
    marginBottom: "2px"
},
contadorS = {
    background: "whitesmoke",
    display: "flex"
}
const Card =(props)=>{
    return(
    <div style={estilo} className="guajolote">
    <figure>
        <img src={props.img} alt={props.name} />
        <figcaption>{props.name}</figcaption>
    </figure>
    <h3>Precio {props.precio}</h3>
    <div style={contadorS}>
    <button onClick={props.sumar}>+</button>
    <h2>0</h2>
    <button onClick={props.restar}>-</button>
    </div>

    <button className="btn-pagar" onClick={props.ha}>Pagar</button>

    </div>
    )
}

const stripeP = loadStripe(STRIPE_KEYS.public)
/* Estilos de prueba para la carta */
const Stripe = () =>{
    
    const [productos, setProductos] = useState([])
    const [precios, setPrecios] = useState([])
    const [pListos, setPListo] = useState([{idPrecio: "price_1J93ufJVTSqA0wgZMD8FilhH",
    idProduct: "prod_JmdBI9FhTGiM6H",
    img: "https://files.stripe.com/links/MDB8YWNjdF8xSjkzcFFKVlRTcUEwd2dafGZsX3Rlc3RfSG5pcUpBQkhaV1c1YzVTZmJGTXZWN2Nk00btvfHrjd",
    moneda: "mxn",
    name: "guajolota Verde",
    precio: "2500000"}])
    const [cantidad, setCantidad] = useState(0)
    const [stripeError, setStripeError] = useState()
    const [loading, setLoading] = useState()


    useEffect(() => {
        const ConexionAPi =()=>{
            //console.log(STRIPE_KEYS)
            const   fecthOptions = {
                headers:{
                    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
                },
            },
            moneyFormat = num => `$ ${num.slice(0,-4)}.${num.slice(-2)}`
            
            
            Promise.all([
                fetch("https://api.stripe.com/v1/products?limit=20",fecthOptions),
                fetch("https://api.stripe.com/v1/prices?limit=20",fecthOptions)
            ])
            .then((responses) => Promise.all(responses.map((res) => res.json())))
            .then(json =>{
                let listaProductos = json[0].data, 
                listaPrecios = json[1].data; 
                
                listaProductos.map(el =>{
                    const datosProductos = {
                        id:el.id,
                        name: el.name,
                        img:el.images[0]
                    }    
                    setProductos((productos) => [...productos,datosProductos])
                })
                
                listaPrecios.map(el =>{
                    const datosPrecios = {
                        id:el.id,
                        idProduct:el.product,
                        typeMoney: el.currency,
                        price:el.unit_amount_decimal
                    } 
                    setPrecios((precios) => [...precios,datosPrecios])
                }) 
            }); 
        }
        ConexionAPi()
    }, [])

    const data = () =>{
        const datos = [];
        let lista;
        precios.map(el => {
            productos.filter((products) => products.id === el.idProduct).map(prod => {
                lista = {
                    idProduct:prod.id,
                    img:prod.img,
                    name:prod.name,
                    idPrecio:el.id,
                    moneda:el.typeMoney,
                    precio:el.price
                }
                //datos.push(lista)
            })
            
        })
        return lista        
    }
    //setPListo((pListo) => [pListo,data()])
    //console.log(data())
    const handleClick = async (precio) =>{
        setLoading(true)

        const stripe = await stripeP;

        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price:precio,
                quantity:2,
            },],
            mode:"payment",
            successUrl:window.location.origin,
            cancelUrl:window.location.origin
        });
        if (error){
            setLoading(false)
            setStripeError(true)
        }
    };
    /*pagar*/


    return(
        <>
            <h3>Peticiones</h3>
            {!pListos ?  console.log("cargando") : pListos.map((el) => <Card key={el.idPrecio} pagar={() => handleClick}  idPrecio={el.idPrecio} idProducto={el.idProduct} name={el.name} precio={el.precio} monedad={el.moneda} img={el.img}/>)}
            <button role="link" onClick={handleClick} disabled={loading}>
            ir a pagar
            </button>
        </>
    )
} 

export default Stripe;
