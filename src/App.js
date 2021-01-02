// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import { About } from './components/About';
import { Head } from './components/Head';
import { Projects } from './components/Projects';
import { Skill } from './components/Skill';
import { Contact } from './components/Contact'
/* eslint-disable-next-line no-use-before-define*/
function App() {
  return (
    <Fragment>
      <Head/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </Fragment>
  );
}
export default App;
