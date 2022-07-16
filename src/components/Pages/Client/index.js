import React,  { ReactDOM } from 'react'
import './styles.css'
import { Input, Box } from '@mui/material';
import { Container, flexbox } from '@mui/system';
import { end } from '@popperjs/core';
import BoxTitle from '../../BoxTitle';

const styleContainer = {
  bgcolor: 'lightgray',
  boxShadow: 1,
  borderRadius: 2,
  paddingTop: 5,    
  paddingLeft: 5,    
  paddingBottom: 5,    
  paddingRight: 5,    
  }

const styleInput = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%'
}

export default class Client extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Box sx={styleContainer}>
          <BoxTitle title="Cadastro de usuário:"></BoxTitle>
          <div>
            <label>Nome:</label>
            <Input style={styleInput}></Input>
          </div>

          <div>
            <label>Idade:</label>
            <Input style={styleInput}></Input>
          </div >

          <div >
            <label>E-mail:</label>
            <Input style={styleInput}></Input>
          </div >

          <div >
            <label>Celular:</label>
            <Input style={styleInput}></Input>
          </div >
        </Box>
     </React.Fragment >
    )
  }
}