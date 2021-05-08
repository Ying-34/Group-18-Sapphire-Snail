import { Input } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import './nav.css'
import submitHandler from '../../views/Main/searchEngine/searchE'

const Nav =()=>{
  /**
   * Props is the value passed by the parent component
   * If the parent component does not transfer the title, it will be displayed as "Sapphire snail" by default
   */

  const [val, setVal] = useState('');


    return (
      <div className='nav-wrapper'>
        <div className='cursor'>
          <Link className='logo' to='/home'>
            Sapphire Snail
          </Link>
        </div>

        <div className='flex cursor'>
          <div id="navSearch" className='search' style={{visibility:'hidden'}}>
            <Input onChange={e => setVal(e.target.value)} onSearch={submitHandler(val,'divL')}  suffix={<SearchOutlined />} />
            <div id="divL" style={{zIndex:2}}></div>
          </div>
          <Link to='/login' className='login-btn'>
            Login
          </Link>
        </div>
      </div>
    )
}

export default Nav
