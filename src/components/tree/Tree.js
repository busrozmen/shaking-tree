import React, {useState, useEffect} from 'react'
import treeIcon from '../../assets/tree.svg'
import signIcon from '../../assets/sign.svg'
import '../tree/Tree.css'
import Basket from '../basket/Basket'
import ReactAnime from 'react-animejs'
import Apples from '../apples/Apples'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as isShakedActions from '../../redux/actions/isShakedActions'
import * as progressActions from '../../redux/actions/progressActions'


const Tree = (props) => {
  // usign react-animejs
  const { Anime } = ReactAnime
  // to control animation
  const [control, setControl] = useState(null)
  // to get progress and control values
  const [meta, setMeta] = useState({
    control: control,
    progress: 0
  })
  /* react-animejs freezes after pressing restart more than 2 times. 
     Added count to understand how many times the button has been pressed. */
  const [count, setCount]=useState(0)
  // shaking() function works when clicking 'let's-shake' sign
  const shaking = () => {
    setCount( count+1 )
    setControl('play')
    //started to shake
    props.actions.isShaked(true)
    if(meta.progress === 100){
      // since react-animejs frozen after pressing more than 2 restarts, play control was activated again.
      if(count %2 === 0){
        setControl('play')
      }
      else{
        setControl('restart')
      }
      // progress completed, can start again
      props.actions.progress(false)
    }
  }
  useEffect(() => {
    // when apples fall, progress information is sent after 1 second.
    setTimeout(() => {
      props.actions.progress(meta.progress===100)
    }, 1000)
  }, [meta.progress, props.actions])//depends on meta.progress and props.actions

  return (
  <div className='tree-wrapper'>
    <Anime className='animation-wrapper'
      control={control}
      setMeta={setMeta}
      animeConfig={{
        autoplay: false // co-written as both animations will be 'autoplay:false'
      }}
      initial={[
        {
          targets: '.tree-icon', // tree shaking effect
          easing: 'linear',
          duration: 3000,
          translateX: [-10,10,-5,5,0,-10,10,-5,5,0]
        },
        {
          targets: '.apples-wrapper img',// apple falling effect
          easing: 'easeInOutSine',
          delay: function(el, i, l) {
            return Math.random(5) * i * 1000 // for each apple to fall at random intervals
          },
          keyframes:[
            {
              top: '600px'
            }
          ]
        }
      ]}
    >
      <img src={treeIcon} className='tree-icon' alt='tree-icon'/>
      <Apples />
      <Basket />
    </Anime>
    {/* shaking() function works when clicking 'let's-shake' sign */}
    <div onClick={() => shaking()} >    
      <img src={signIcon} className='sign-icon' alt='sign-icon'/>
    </div>
  </div>
  );
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
export default connect (mapStateToProps, mapDispatchToProps)(Tree)
