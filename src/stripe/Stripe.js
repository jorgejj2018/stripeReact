import React, { useState, useEffect } from 'react'
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
const Peticion = () =>{
    
    const [productos, setProductos] = useState([])
    const [precios, setPrecios] = useState([])
    const [cantidad, setCantidad] = useState(0)
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
    
    const pagar = () =>{
        document.addEventListener("click", e =>{
            if(e.target.matches(".btn-pagar")){
                let price = e.target.parentElement.getAttribute('data-price');
                Stripe(STRIPE_KEYS.public).redirectToCheckout({
                    lineItems: [{price, quantity:1}],
                    mode: "subscription",
                    successUrl: "",
                    cancelUrl: "",
                }).then( res => !res.error ?console.log(res): Promise.reject(res))
                .catch((err) => {
                    console.log(message)
                })
            }
        })
        /*         
         */
    }

    //console.log(productos)
    
    const Card = (props) =>{
        return(
        <div style={estilo} className="guajolote">
        <figure>
            <img src={props.img} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
        <h3>Precio {props.precio}</h3>
        <div style={contadorS}>
        <button onClick={props.sumar}>+</button>
        <h2>{cantidad}</h2>
        <button onClick={props.restar}>-</button>
        </div>

        <button className="btn-pagar">Pagar</button>

        </div>
        )
    }
    
    return(
        <div>
            <h3>Peticiones</h3>
            {productos.length === 0 ? "Cargando" : productos.map(el => <Card key={el.id} cantidad={cantidad} sumar={() => setCantidad(cantidad + 1)} restar={() => setCantidad(cantidad - 1)} precio={precios.price} name={el.name} img={el.img}/>)}
        </div>
        /* productos.map(el => <Card key={el.id}  pagar={() => pagar()}cantidad={cantidad} sumar={() => setCantidad(cantidad + 1)} restar={() => setCantidad(cantidad - 1)}  name={el.name} img={el.img}/>) */
    )
} 

export default Peticion;
