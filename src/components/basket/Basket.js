import React from 'react'
import { connect } from 'react-redux'
import basketIcon from '../../assets/basket.svg'
import checkIcon from '../../assets/check.svg'
import '../basket/Basket.css'

const Basket = (props) => {
  // received progress and isShaked info to understand that the apples are in the basket. 
  const { progress, isShaked } = props;
  
  return (
    /* after the shaking of the tree ends and the apples fall to the ground, 
    the 'full-basket' class is added when the apples are in the basket
    and the 'empyt-basket' class is added before the tree starts to shake. */
    <div className={`basket-wrapper ${(!isShaked && progress)? 'full-basket' :'empty-basket'}`}>
      <img src={basketIcon} className='basket-icon' alt='basket-icon'/>
      <img src={checkIcon} className='check-icon' alt='check-icon'/>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    progress: state.progressReducer,
  }
}
export default connect (mapStateToProps)(Basket)
