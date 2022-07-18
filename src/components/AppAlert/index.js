import { Alert } from '@mui/material'
import React from 'react'
import { Component } from "react"


export default class AppAlert extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <React.Fragment>
        {this.props.status==='SAVED' &&
        <Alert style={{marginTop: '20px'}} severity="success">{this.props.messages[0]}</Alert>}
      
        {this.props.status==='EDITING' &&
        <Alert style={{marginTop: '20px'}} severity="info">{this.props.messages[0]}</Alert>}

        {this.props.status==='ERROR' &&
        <Alert style={{marginTop: '20px'}} severity="error">
        <ul>
          {this.props.messages.map(msg => (
          <li key={msg}>
            {msg}
          </li>))} 
        </ul>
        </Alert>
        }

      </React.Fragment>
    )
    }
}
