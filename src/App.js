import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/MainHome/Header/";
import Home from "./Pages/Home/";
import Contact from "./Pages/Contact/";
import About from "./Pages/About/";
import Login from "./Pages/Login";
import Detail from "./Pages/Detail";
import PageNotFound from "./Pages/PageNotFound";
import Profile from "./Pages/Profile";
import toDoListRCC from "./Pages/ToDoList/todolistRCC";
import toDoListRFC from "./Pages/ToDoList/todolistRFC";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Detail/:id" component={Detail} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/toDoListRCC" component={toDoListRCC} />
        <Route exact path="/toDoListRFC" component={toDoListRFC} />

        <Route exact path="*" component={PageNotFound} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
