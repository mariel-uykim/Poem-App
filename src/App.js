
import './App.css';
import React from 'react';
import Create from './Create';
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import Poems from './Poems';
import Poem from './Poem';

function App() {
  //create page 
  const [poems, setPoems] = useState([])

  const getFormVal = (returnVal) => {
    setPoems(poems.concat(returnVal))
    console.log("success!")
    window.location.href = "/"
  }

  const addLike = (id) => {
    const poemUrl = '/api/poems/' + id
    const poem = poems.find(poem => poem.id === id)
    const newLike = poem.votes++

    const data = {
      "votes":newLike
    }
    axios.post(poemUrl, data)
          .then(response => {
            const temp = poems
            for(var i = 0; i < temp.length; i++){
              if(temp[i].id === id){
                  temp[i].votes = newLike
                  break
              }
            }
            setPoems(temp)
          })
    
  }
  useEffect(() => {
    axios.get("/api/poems")
          .then(response => {
            setPoems(response.data)
          })
  })

  return (
    <div>
      <Router>
        <div className = "nav">
          <Link to="/" style={{textDecoration: 'none'}} className = "navLink">Poems</Link>
          <Link to="/create" style={{textDecoration: 'none'}} className = "navLink">Create</Link>
        </div>
        <Switch>
          <Route path="/poems/:id">
              <Poem poems = {poems} addLike = {addLike} />
          </Route>
          <Route path="/create">
            <Create onSubmit={getFormVal}/>
          </Route>
          <Route path="/">
            <Poems poems = {poems}/>
          </Route>
        </Switch>
      </Router>
      <div className = "footer">
        <p> COMP3120 - Individual Project by: Mariel Uykim</p>
      </div>
    </div>
  );
}

export default App;
