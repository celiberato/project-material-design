import React,  { ReactDOM } from 'react'
import './styles.css'
import { mdiPencilOutline } from '@mdi/js';

export default class BoxTitle extends React.Component {

  constructor(props){
    super(props)
  }   

  render() {
    return (
      <React.Fragment>
        <span class="iconify" data-icon="mdi:pencil-outline"></span>
        <h1>{this.props.title}</h1>
     </React.Fragment >
    )
  }
}