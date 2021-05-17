import './App.css';
import {AlertBlock} from './components/Alerts';
import {AvatarBlock} from './components/Avatar';
import {BadgesBlock} from './components/Badges';
import {ButtonBlock} from './components/Buttons';
import {CardBlock} from './components/Cards';
import {AccordionBlock} from './components/Accordion';
import {NavBar} from './components/NavBar';

function App() {
  return (
    <div>
      <AlertBlock/>
      <AvatarBlock/>
      <BadgesBlock/>
      <ButtonBlock/>
      <CardBlock/>
      <AccordionBlock/>
      <NavBar/>
    </div>
  );
}

export default App;
