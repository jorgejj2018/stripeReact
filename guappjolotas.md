# Guappjolotas

Construye la aplicación que te ayudará a ordenar tus guajolotas a domicilio.

**¿Qué es una guajolota?**

Platillo típico de la gastronomía de la Ciudad de México que consiste de un tamal dentro de un bolillo.

//Hay que utilizar Reack hooks y useContext para manejar el Estado. Pues con Class se va a hacer muy dificil

## Requerimientos generales del sistema

- Debe hacer uso de [ReactJS](https://es.reactjs.org/) y [styled-components](https://styled-components.com/)

- Añadir como complemento del diseño crear perfil e iniciar sesión.

- Agrega los productos y haz funcionar el buscador para encontrar tu guajolota favorita.
  **Utiliza ReactMemo para optimizar tu buscador**

- Establece enrutamiento dinámico //React Router

- Permite que agreguen y eliminen productos del carrito, crea el checkout, todo esto haciendo uso de una API Fake utilizando **JSON web server** donde se permita ejecutar peticiones HTTP.
  [Documentación JSON web Server](https://github.com/typicode/json-server) //no tengo idea de esto, lo podriamos utilizar hardcodeado

- Integra Stripe para poder hacer cobros mínimos desde 10 pesos. // yo se utilizar payPal

Requerimientos

- Planeación de actividades del desarrollo del producto software (Trello o GitHub Projects) // No SE
- Aloja las imágenes provistas en algún proveedor de alojamiento de imáges en la nube, te recomendamos [imgur](https://imgur.com/). // Si se, pero es bien facil
- Habilitar el checkout con **Stripe** [API de Stripe](https://stripe.com/docs/api) // NO SE
- Integrar módulo de autenticación (Iniciar sesión / Registrarse) utilizando local storage o session storage para guardar la sesión. //Se podria manejar mejor con el Estado
- Agregar y eliminar productos del carrito.// SI SE
- Publica tu resultado con [Netlify](https://www.netlify.com/) para el frontend.// SI SE
- Publica tu API Fake haciendo uso de [Vercel](https://vercel.com/).// NO SE

# Consideraciones finales

- Tener en cuenta la estructura y recomendaciones de un README.md profesional compartido en el **SPRINT 1** SI SE
