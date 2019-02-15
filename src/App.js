import React, { Component } from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
//COMPONENTS
import Header from './components/header' ;
import Footer from './components/footer' ;
//CONTAINERS
import Home from './conatiners/home' ;
import News from './conatiners/news' ;
import Gallery from './conatiners/gallery' ;


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div >
      <Header/>
      <div className="main">
      <Switch >
         <Route path="/news/:id" component={News} /> 
         <Route path="/galleries/:id" component={Gallery} />   
        <Route  path='/' component={Home} ></Route>
      </Switch>
      </div>
      <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
