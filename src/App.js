import './App.css';
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
      <CalloutBlock/>
      <InputBlock/>
      <ListBlock/>
    </div>
  );
}

export default App;
