import React, { useState } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import submitHandler from '../../Main/searchEngine/searchE'

const Banner =()=>{
  const [val, setVal] = useState('');

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
              onSearch={submitHandler(val,'divLi')}
              suffix={<SearchOutlined className='search-icon' />}
            />
            <div id="divLi" style={{visibility: 'hidden', zIndex: 3}}></div>
          </div>
        </div>
      </div>
    )
}

export default Banner
