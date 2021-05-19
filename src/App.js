import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {AlertBlock} from './components/Alerts';
import {AvatarBlock} from './components/Avatar';
import {BadgesBlock} from './components/Badges';
import {ButtonBlock} from './components/Buttons';
import {CardBlock} from './components/Cards';
import {AccordionBlock} from './components/Accordion';
import {NavBar} from './components/NavBar';
import {CalloutBlock} from './components/Callouts';
import {InputBlock} from './components/Inputs';
import {ListBlock} from './components/Lists';
import {Sidebar} from './components/Sidebar';
import {Home} from './Home';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Sidebar/>
      {/* switch component allows only one component that matches to render */}
      <div className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/accordion">
          <AccordionBlock/>
        </Route>
        <Route exact path="/alert">
          <AlertBlock/>
        </Route>
        <Route exact path="/avatar">
          <AvatarBlock/>
        </Route>
        <Route exact path="/badge">
          <BadgesBlock/>
        </Route>
        <Route exact path="/button">
          <ButtonBlock/>
        </Route>
        <Route exact path="/callout">
          <CalloutBlock/>
        </Route>
        <Route exact path="/card">
          <CardBlock/>
        </Route>
        <Route exact path="/input">
          <InputBlock/>
        </Route>
        <Route exact path="/list">
          <ListBlock/>
        </Route>
        <Route exact path="/navbar">
          <NavBar/>
        </Route>
      </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
