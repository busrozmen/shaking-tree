import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as isShakedActions from '../../redux/actions/isShakedActions'
import * as progressActions from '../../redux/actions/progressActions'
import appleIcon from '../../assets/apple.svg'
import '../apples/Apples.css'

const Apples = (props) => {
  // added three apples
  const apples = Array.from(Array(3),(value,index) => index + 1)
  // received progress info to show apples in basket
  const { progress } = props

  useEffect(() => {
    if(progress){
      props.actions.isShaked(false)
    } 
  }, [progress,props.actions])

  return (
    /* 1 second after the apples fall to the ground, the 'apple basket' class is added to the apple wrapper div. 
    By looking at this class, the position of apples is changed. */
    <div className={`apples-wrapper ${ progress ? 'apple-basket': ''}`}>
      {
      apples.map((i,index) =>(
        <img key={index} src={appleIcon} className='apple-icon' alt={index}/>
      ))
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isShaked: state.isShakedReducer,
    progress: state.progressReducer
  }
}
function mapDispatchToProps(dispatch) { 
  return {
    actions: {
      isShaked: bindActionCreators(isShakedActions.isShaked, dispatch),
      progress: bindActionCreators(progressActions.getProgress, dispatch)
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Apples)