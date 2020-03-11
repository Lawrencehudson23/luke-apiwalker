import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Router,navigate} from '@reach/router';
import People from './views/People';
import Planets from './views/Planet';
import DefaultView from './views/DefaultView';

function App() {
  const [formState, setFormState] = useState({
    category:'people',
    id:''
  });

  function handleCategory(event){
    const newCategory=event.target.value;
    
    setFormState({
      ...formState,
      category:newCategory
    })
    
  }

  function handleId(event){
    setFormState({
      ...formState,
      id: event.target.value
    })
    
  }
  
  function searchHandler(event){
    event.preventDefault();
    navigate('/'+formState.category+'/'+formState.id)
    // setFormState({
    //   category:'',
    //   id:''
    // })
  }

  return (
    <div className="App">
      <form onSubmit={searchHandler}>
        <span>Search for: 
          <select onChange={handleCategory}>
            <option  value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </span>{' '}
        <span>  ID:
          <input onChange={handleId} type="number" value={formState.id}/>
        </span>
        <button >Search</button>
      </form>

      <Router>
        <People path="people/:id"/>
        <Planets path="planets/:id"/>
        <DefaultView path="/404"/>
      </Router>
    </div>
  );
}

export default App;
