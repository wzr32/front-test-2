import React from 'react'

const HomeGradient = () => {
  return (
    <div
      style={{
        zIndex: '-1',
        width: '110vw',
        height: '800px',
        top: '-50%',
        position: 'fixed',
        borderRadius: '0 0 0 7em',
        background: 'rgb(98,11,203)',
        background: 'linear-gradient(135deg, rgba(97,13,195,1) 0%, rgba(116,19,186,1) 35%, rgba(149,43,179,1) 35%, rgba(143,33,145,1) 60%, rgba(165,54,159,1) 60%, rgba(161,42,136,1) 85%, rgba(183,65,143,1) 0%, rgba(169,49,136,1) 100%)',
        transform: 'rotate(-14deg)',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    />
  )
}

export default HomeGradient
