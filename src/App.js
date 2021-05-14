import './App.css';
import {AlertBlock} from './components/Alerts';
import {AvatarBlock} from './components/Avatar';
import {BadgesBlock} from './components/Badges';
import {ButtonBlock} from './components/Buttons';

function App() {
  return (
    <div>
      <AlertBlock/>
      <AvatarBlock/>
      <BadgesBlock/>
      <ButtonBlock/>
    </div>
  );
}

export default App;
