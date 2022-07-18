import React,  { ReactDOM } from 'react'
import './styles.css'
import Pencil from '../../assets/svg/pencil-outline.svg'
import { flexbox } from '@mui/system'
import { ForkLeft } from '@mui/icons-material'

const iconStyle = {
  width: '30px'
}

const iconWrapper = {
  display: 'flex',
  justifyContent: 'left',
  flexDirection: 'column',
}

export default class AppBoxTitle extends React.Component {

  constructor(props){
    super(props)
  }   

  render() {
    return (
      <React.Fragment>
        <div className="d-flex"  style={{justifyContent: 'left', display: 'flex'}}>
          <img src={Pencil} style={iconStyle}/>
          <h1 style={{marginLeft: '20px'}} >{this.props.title}</h1>
        </div>
     </React.Fragment >
    )
  }
}