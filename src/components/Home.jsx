import React from 'react'
import foto from '../img/pngegg.png'
function Home() {
  return (
    <div className='home'>
        <h1>Bienvenido a <strong>Happy Cake</strong></h1>
        <p>El lugar de los pasteles felices</p>
        <img className='fotoHome' src={foto} alt="torta" />
    </div>
  )
}

export default Home