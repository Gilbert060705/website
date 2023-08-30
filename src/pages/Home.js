import React from 'react'
import Logo from '../img/bg.jpg'

function Home() {
  return (
    <>
    <div style={{
      position: 'fixed',
      top: '100px',
    }}>
      <img src={Logo} style={{
        width: '100vw',
        height: 'calc(100vh - 100px)',
        opacity: 0.8
      }}/>
    </div>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 100px)',
      zIndex: 100,
      fontSize : '50',
      fontFamily: 'Times New Roman',

    }}>
      <div>
        P Balap
      </div>
    </div>
    </>
  )
}

export default Home