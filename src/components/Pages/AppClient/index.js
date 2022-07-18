import React, { Component, useState } from 'react'
import './styles.css'
import { Input, Box, Button } from '@mui/material';
import AppBoxTitle from '../../AppBoxTitle';
import AppAlert from './../../AppAlert'

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
  width: '100%',
}

const styleLabel = {
  marginTop: '20px'
}

const styleButton = {
  width: '80%', 
  marginTop: '20px', 
  marginLeft: '10%', 
  marginRight: '10%'
}

function isEmpty(texto){
  return texto===undefined || texto===null || texto==='';
}


export default function Client (props) {

  const [status, setStatus] = useState('EDITING');
  const [messages, setMessages] = useState(['Favor preencha o cadastro:']);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [celular, setCelular] = useState();

  function save () {
    const newStatus = 'SAVED'; 
    const messages = valid(status);

    if(messages.length>0){
      // ADICONA VALIDAÇÕES DE NEGOCIO...
      updateMessage('ERROR', messages);
    } else {
      // SALVO COM SUCESSO...
      updateMessage(newStatus, ['Dados enviados com secesso!']);
    }
  }

  function valid () {
    let messages = [];
  
    if (isEmpty(name)){
      messages[messages.length] = 'Favor preencher o nome.'
    }
  
    if (isEmpty(email)){
      messages[messages.length] = 'Favor preencher o e-mail.'
    }
  
    if (isEmpty(celular)){
      messages[messages.length] = 'Favor preencher o celular.'
    }
    
    return messages; 
  };
  
  function cancel (){
    setStatus('EDITING');
    setMessages(['Favor preencha o cadastro:'])
    setName('')
    setEmail('')
    setCelular('')
  }

  function updateMessage (status, messages){
    setStatus(status);
    setMessages(messages);
  }

  return (
    <React.Fragment>
      <Box sx={styleContainer}>
        <AppBoxTitle title="Cadastro de usuário:"></AppBoxTitle>

        <AppAlert status={status} messages={messages}></AppAlert>

        <div style={{ marginTop: styleLabel.marginTop }}>
          <label>Nome:</label>
          <Input value={name} name="name" id="name" onChange={(evt) => setName(evt.target.value )} style={styleInput} placeholder="Informe o nome"></Input>
        </div>

        <div style={{ marginTop: styleLabel.marginTop }}>
          <label>E-mail:</label>
          <Input value={email} type="email" name="email" id="email" onChange={(evt) => setEmail(evt.target.value)} style={styleInput} placeholder="Informe o e-mail"></Input>
        </div >

        <div style={{ marginTop: styleLabel.marginTop }}>
          <label>Celular:</label>
          <Input value={celular} name="celular" id="celular" onChange={(evt) => setCelular(evt.target.value)} style={styleInput} placeholder="Informe o celular"></Input>
        </div >
  
        <div className="d-flex" style={{ display: 'in-line', alignSelf: 'center', flexDirection: 'column', justifyContent: 'center', flexWrap: 'no-wrap' }}>
          <Button variant="contained" color="success" style={styleButton} onClick={save}>Enviar</Button>
          <Button variant="contained" color="primary" style={styleButton} onClick={cancel}>Limpar</Button>
        </div>
      </Box>
    </React.Fragment >    
  );
}