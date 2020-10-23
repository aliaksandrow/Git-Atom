import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import TodoApp from './TodoApp'


class App extends Component {
render() {
  return(
    <div>
    <Header />
    <div id ='container'>
    <Home />
    <About />
    <Gallery />
    <TodoApp/>
    </div>
    </div>
  )
}
}

export default App;
