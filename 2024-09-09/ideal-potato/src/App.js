import React, { useState } from 'react';
import './App.css';
import './Form.css';
import Name from './components/Name';
import Counter from './components/Counter';
import PropDrilling from './components/PropDrilling';
import Show from './components/Show';
import Context from './components/Context';
import Form from './components/Form';

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)

  return (
  <>
    <Context/>
    <Show 
      show={show}
      toggleShow={toggleShow}
    /> 
    <PropDrilling/>
    <Counter/>
    <Name title = "Ester"/>
    <Form name = "Ester"/>
  </>
)}

export default App;
