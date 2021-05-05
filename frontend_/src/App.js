import 'antd/dist/antd.css';
import './assets/css/reset.css'
import './assets/css/common.css'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import wikipage from './views/Main/wikipage'
import Home from '../src/views/Home/Home'

const App =() =>{
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
        <Route path="/home/" component={Home}/>
        <Route path="/wikipage/" component={wikipage}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
