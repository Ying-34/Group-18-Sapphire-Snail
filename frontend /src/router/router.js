import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import CreateAccount from '../views/CreateAccount/CreateAccount'

// router components
const Router = () => {
  return (
    <BrowserRouter>
      {/* currently only match one router */}
      <Switch>
        {/* match exactly */}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/create-account' component={CreateAccount} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
