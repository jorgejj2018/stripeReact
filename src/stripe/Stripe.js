import React, { useState, useEffect } from 'react'
import STRIPE_KEYS from "./stripeKeys";

const Peticion = () =>{

const [productos, setProductos] = useState([])

 useEffect(() => {
     const ConexionAPi =()=>{
             //console.log(STRIPE_KEYS)
        const d = document,
        fecthOptions = {
            headers:{
            Authorization: `Bearer ${STRIPE_KEYS.secret}`,
            }
        },
        moneyFormat = num => `$ ${num.slice(0,-4)}.${num.slice(-2)}`
        
        
        Promise.all([
            fetch("https://api.stripe.com/v1/products",fecthOptions),
            fetch("https://api.stripe.com/v1/prices",fecthOptions)
        ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then(json =>{
            let listaProductos = json[0].data, 
                listaPrecios = json[1].data; 
            console.log(listaProductos)
            console.log(listaPrecios)
            
            const datosProductos = {
                /* img: listaProductos.images */
            }
            setProductos((productos) => [...productos,datosProductos])
        }); 
    }
    ConexionAPi()
}, [])
    console.log(productos)
    
    return(
        <h3>Peticiones</h3>
    )
} 

export default Peticion;
