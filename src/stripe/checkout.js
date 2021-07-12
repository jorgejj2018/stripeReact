import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import STRIPE_KEYS from "./stripeKeys";


const stripeP = loadStripe(STRIPE_KEYS.public)
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

    <button className="btn-pagar" onClick={props.pagar} data-price={props.idPrecio}>Pagar</button>

    </div>
    )
}

const PageC = () =>{
    const [stripeError, setStripeError] = useState()
    const [loading, setLoading] = useState()


    const handleClick = async () =>{
        setLoading(true)

        const stripe = await stripeP;

        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price:"price_1J942lJVTSqA0wgZycinuGv0",
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

    return (
        <>
            {stripeError && <p style={{ color: "gray"}}>{stripeError}</p>}

            <button role="link" onClick={handleClick} disabled={loading}>
            ir a pagar
            </button>
        </>
    )
}

export default PageC;