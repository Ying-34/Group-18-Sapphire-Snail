import { useEffect, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Banner/Banner'
import TopArticle from '../TopArticle/TopArticle'
import snipaste from '../../../assets/imgs/snipaste.png'
import './content.css'

const Content = () => {
  const [scale, setScale] = useState(false)

  const getScrollTop = useCallback(() => {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  }, [])

  const scroll = useCallback(() => {
    const scrollTop = getScrollTop()
    if (scrollTop > 30) {
      setScale(true)
      return
    }
    setScale(false)
  }, [getScrollTop])

  useEffect(() => {
    // Add event monitoring
    document.addEventListener('scroll', scroll)

    return () => {
      // Remove event listening
      document.removeEventListener('scroll', scroll)
    }
  }, [scroll])

  return (
    <div className='home-content'>
      <div className='header-container'>
        <div className={`logo-container ${scale ? 'logo-scale' : ''}`}>
          <img className='logo-img' alt='logo' src={snipaste} />
          <span className='logo-title'>Sapphire Snail</span>
        </div>

        <div className='link-container flex-c'>
          <Link to='/about-us' className='link'>
            About us
          </Link>
          <Link to='/qusetion-answer' className='link'>
            Q & A
          </Link>
          <Link to='/contact' className='link'>
            Contact
          </Link>
        </div>
      </div>

      <Banner />
      <TopArticle />
    </div>
  )
}

export default Content
