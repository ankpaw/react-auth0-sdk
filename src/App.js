import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/shared/header/header";
import Footer from "./components/shared/footer/footer";
import Login from "./components/feature/login/login";
import Loading from "./components/shared/loading/loading";
import Dashboard from "./components/feature/dashboard/dashboard";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  
  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <Router >
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/" exact component={Login}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
