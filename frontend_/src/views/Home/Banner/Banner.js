import React from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const Banner = () => {
  const [val, setVal] = React.useState('')

  return (
    <div className='banner'>
      <div className='flex-c full-h'>
        <div className='intro-wrapper'>
          <div className='intro'>
            <div className='full-w'>Sapphire snail</div>
            <div className='full-w'>makes your reading process </div>
            more interesting！
          </div>
          <div className='intro-desc'>Are you ready? Start exploring your Wikipedia forum</div>

          <Input
            className='search-input'
            onChange={e => setVal(e.target.value)}
            suffix={<SearchOutlined className='search-icon' />}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
