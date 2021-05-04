import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import CreateAccount from '../views/CreateAccount/CreateAccount'
import AboutUs from '../views/AboutUs/AboutUs'
import ContactUs from '../views/ContactUs/ContactUs'
import QuestionAndAnswer from '../views/QuestionAndAnswer/QuestionAndAnswer'

// router assembly
const Router = () => {
  return (
    <BrowserRouter>
      {/* Currently, only one route is matched */}
      <Switch>
        {/* exact Precise matching */}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/create-account' component={CreateAccount} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/question-answer' component={QuestionAndAnswer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
