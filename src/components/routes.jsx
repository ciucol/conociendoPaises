import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Countries from "../pages/countries/Countries";
import Landing from "../pages/Landing";
import Error404 from "../pages/Error404";

export default function routes() {
  return (
    //Con <Router> declro que voy a manejar rutas. <Switch> sirve para al encontrar la primer coincidencia, esa es la vista que renderiza y no sige buscando. Agrego el paremtro "exact" para evitar coincidencais no deseadas
    <Router>
      <Switch>
        <Route exact path="/countries" component={Countries} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Landing} />
        <Route parth="*" component={Error404} />
      </Switch>
    </Router>
  );
}
