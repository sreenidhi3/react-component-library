import './App.css';
import {AlertBlock} from './components/Alerts';
import {AvatarBlock} from './components/Avatar';
import {BadgesBlock} from './components/Badges';
import {ButtonBlock} from './components/Buttons';
import {CardBlock} from './components/Cards';

function App() {
  return (
    <div>
      <AlertBlock/>
      <AvatarBlock/>
      <BadgesBlock/>
      <ButtonBlock/>
      <CardBlock/>
    </div>
  );
}

export default App;
