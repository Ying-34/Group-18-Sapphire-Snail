import { Input } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import './nav.css'

const Nav = () => {
  /**
   * the value that props pass for parent components
   * If parent components don't transfer title, it default shows 'Sapphire-Snail'
   */

  const [val, setVal] = useState('')

  return (
    <div className='nav-wrapper'>
      <div className='cursor'>
        <Link className='logo' to='/'>
          Sapphire Snail
        </Link>
      </div>

      <div className='flex cursor'>
        <div className='search'>
          <Input onChange={e => setVal(e.target.value)} suffix={<SearchOutlined />} />
        </div>

        <Link to='/login' className='login-btn'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Nav
