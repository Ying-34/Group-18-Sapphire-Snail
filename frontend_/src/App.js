import 'antd/dist/antd.css';
import './assets/css/reset.css'
import './assets/css/common.css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import wikipage from './views/Main/wikipage'
import Home from '../src/views/Home/Home'
import Login from '../src/views/Login/Login'
import AboutUs from '../src/views/AboutUs/AboutUs'
import ContactUs from '../src/views/ContactUs/ContactUs'
import QuestionAndAnswer from '../src/views/QuestionAndAnswer/QuestionAndAnswer'
import CreateAccount from './views/CreateAccount/CreateAccount';

const App =() =>{
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
        <Route path="/home/" component={Home}/>
        <Route path="/wikipage/:pageName" component={wikipage}/>
        <Route path="/Login/" component={Login}/>
        <Route path="/About-us/" component={AboutUs}/>
        <Route path="/Contact-us/" component={ContactUs}/>
        <Route path="/question-answer/" component={QuestionAndAnswer}/>
        <Route path="/create-account/" component={CreateAccount}/>
        <Route exact path="/"><Redirect to="/home" /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
