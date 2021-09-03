import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AfterHours from './components/AfterHours.jsx';
import Home from './components/Home.jsx';
import LabContactInfo from './components/LabContactInfo.jsx';
import NavbarC from './components/Navbar.jsx';
import Resources from './components/Resources.jsx';
import TypesOfAppointments from './components/TypesOfAppointments.jsx';
import UnderstandingFHOs from './components/UnderstandingFHOs.jsx';


function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <NavbarC />
        <Route path = '/after-hours' exact component = {AfterHours} />
        <Route path = '/' exact component = {Home} />
        <Route path = '/lab-contact-info' exact component = {LabContactInfo} />
        <Route path = '/resources' exact component = {Resources} />
        <Route path = '/types-of-appointments' exact component = {TypesOfAppointments} />
        <Route path = '/understanding-FHOs' exact component = {UnderstandingFHOs} />
      </Router>
    </div>
  );
}

export default App;
