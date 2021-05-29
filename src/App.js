import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css"

function App(){
  return (//Route path is just name. it doesn't have to have same name with component's
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      {/* <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>introduction in Home</h1>
      </Route>
      <Route path="/about">
      <h1>About</h1>
      </Route> */}
    </HashRouter>
  );
}

export default App;