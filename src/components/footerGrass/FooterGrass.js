import React from 'react'
import grassIcon from '../../assets/grass.png'
import '../footerGrass/FooterGrass.css'

const FooterGrass = () => {
  
  return (
    <div className='footer-grass' style={{backgroundImage:`url(${grassIcon})`}} />
  )
}

export default FooterGrass
