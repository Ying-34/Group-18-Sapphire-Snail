import img1 from '../../../assets/imgs/cuba.jpg'

import './topArticle.css'

const TopArticle = () => {
  return (
    <div className='top-articles'>
      <div className='title'>Top Articles</div>
      <ul className='articles'>
        <li className='article'>
          <div className='article-title'>CUBA</div>
          <div className='img-box'>
            <img className='img' src={img1} alt='' />
          </div>
          <div className='article-content-title'>Affordable access to knowledge</div>
          <div className='article-content'>
            The Governement of Cuba has rolled out Kiwix-based EcuMovil across all internet centers
            on the island.
          </div>
          <div className='read-more'>Read more</div>
        </li>
        <li className='article'>
          <div className='article-title'>CUBA</div>
          <div className='img-box'>
            <img className='img' src={img1} alt='' />
          </div>
          <div className='article-content-title'>Affordable access to knowledge</div>
          <div className='article-content'>
            The Governement of Cuba has rolled out Kiwix-based EcuMovil across all internet centers
            on the island.
          </div>
          <div className='read-more'>Read more</div>
        </li>
        <li className='article'>
          <div className='article-title'>CUBA</div>
          <div className='img-box'>
            <img className='img' src={img1} alt='' />
          </div>
          <div className='article-content-title'>Affordable access to knowledge</div>
          <div className='article-content'>
            The Governement of Cuba has rolled out Kiwix-based EcuMovil across all internet centers
            on the island.
          </div>
          <div className='read-more'>Read more</div>
        </li>
      </ul>
    </div>
  )
}

export default TopArticle
