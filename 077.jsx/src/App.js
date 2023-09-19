import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import Task2event from './pages/Task2event';
import Task3event from './pages/Task3event';
import Task4event from './pages/Task4event';
import Task5event from './pages/Task5event';
import Task6event from './pages/Task6event';
import Task7event from "./pages/Task7event";
import Task11event from './pages/Task11event';
import Task12event from './pages/Task12event';
import Task10event from "./pages/Task10event";
import Task8 from './pages/Task8';
import Task13page from './pages/Task13page'
import Task14page from './pages/Task14page'
import Task15page from './pages/Task15page'
import Task16page from './pages/Task16page'
import Task17page from "./pages/Task7event";
import Task18page from './pages/Task18page';
import Task19effect from './pages/Task19effect';
import Task20ref from "./pages/Task20ref";
import Task21effect from './pages/Task21effect';
import Task22refs from './pages/Task22refs';
import Task23effect from './pages/Task23effect'
import Task24ref from './pages/Task24ref';
import Task25ref from './pages/Task25ref';
import Task26effect from './pages/Task26effect'
import Task27memo from './pages/Task27memo';
import MyContext from "./context/context";
import Task28context from './pages/Task28context';
import Task29Memo from './pages/Task29memo'
import Task30context from './pages/Task30context'
import Task31callback from './pages/Task31callback';
import Task32callback from './pages/Task32callback'
import {useState} from 'react'
import Task33callback from "./pages/Task33callback";
import Task34reducer from "./pages/Task34reducer";
import Task35reducer from "./pages/Task35reducer";

export default function App() {
  const [value, setValue] = useState('en');
  function sayHello(event) {
    setValue(event.target.textContent)
}

  return (
    <div>
      <MyContext.Provider value={{ name: 'name', surname: 'surname', value:value, sayHello: sayHello}}>
        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
        <Task5 />
        <Task2event />
        <Task3event />
        <Task4event />
        <Task5event />
        <Task6event />
        <Task7event />
        <Task11event />
        <Task12event />
        <Task10event />
        <Task8 />
        <Task13page />
        <Task14page />
        <Task15page />
        <Task16page />
        <Task17page />
        <Task18page />
        <Task19effect />
        <Task20ref />
        <Task21effect />
        <Task22refs />
        <Task23effect />
        <Task24ref />
        <Task25ref />
        <Task26effect />
        <Task27memo />
        <Task28context/>
        <Task29Memo/>
        <Task30context/>
        <Task31callback/>
        <Task32callback/>
        <Task33callback/>
        <Task34reducer/>
        <Task35reducer/>
      </MyContext.Provider>

    </div>
  )
} 
