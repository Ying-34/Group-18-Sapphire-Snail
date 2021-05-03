import { Carousel } from 'antd'
import './content.css'

const style = {
  position: 'absolute',
  left: '40%',
  top: '45%'
}

const Content = () => {
  const handleClick = () => {}

  return (
    <div className='home-content'>
      <Carousel autoplay>
        <div onClick={handleClick} className='img-box-one'>
          <div style={style}>
            <div>Are you ready?</div>
            <div>Start exploring your Wikipedia forum</div>
          </div>
        </div>
        <div className='img-box-two'>
          <div style={style}>
            <div>Are you ready?</div>
            <div>Start exploring your Wikipedia forum</div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Content
