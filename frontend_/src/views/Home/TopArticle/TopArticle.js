import img1 from '../../../assets/imgs/Artificial_intelligence.jpeg'
import img2 from '../../../assets/imgs/Einstein.jpg'
import img3 from '../../../assets/imgs/microsoft.jpg'
import Article from '../../Main/article'


import './topArticle.css'

const TopArticleOpen1 = async () =>{
  localStorage.setItem("event", 'Artificial intelligence');
  Article('Artificial intelligence');
  var win = window.open('/wikipage/Artificial intelligence','_self');
  win.focus();
}
const TopArticleOpen2 = async () =>{
  localStorage.setItem("event", 'Albert Einstein');
  Article('Albert Einstein');
  var win = window.open('/wikipage/Albert Einstein','_self');
  win.focus();
}
const TopArticleOpen3 = async () =>{
  localStorage.setItem("event", 'Microsoft');
  Article('Microsoft');
  var win = window.open('/wikipage/Microsoft','_self');
  win.focus();
}


const TopArticle = () => {
  return (
    <div className='top-articles'>
      <div className='title'>Top Articles</div>
      <ul className='articles'>
        <li className='article' onClick={TopArticleOpen1}>
          <div className='article-title'>Artificial intelligence</div>
          <div className='img-box'>
            <img className='img' src={img1} alt='' />
          </div>
          <div className='article-content'>
          Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, 
          which involves consciousness and emotionality.
           The distinction between the former and the latter categories is often revealed by the acronym chosen. 
           'Strong' AI is usually labelled as artificial general intelligence (AGI) while attempts to emulate 'natural' 
           intelligence have been called artificial biological intelligence (ABI)
           Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals...
          </div>
          <div className='read-more'>Read more</div>
        </li>
        <li className='article' onClick={TopArticleOpen2}>
          <div className='article-title'>Albert Einstein</div>
          <div className='img-box'>
            <img className='img' src={img2} alt='' />
          </div>
          <div className='article-content'>
          Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne; German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) 
          was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time...
          </div>
          <div className='read-more'>Read more</div>
        </li>
        <li className='article' onClick={TopArticleOpen3}>
          <div className='article-title'>Microsoft</div>
          <div className='img-box'>
            <img className='img' src={img3} alt='' />
          </div>
          {/*<div className='article-content-title'>Affordable access to knowledge</div>*/}
          <div className='article-content'>
          Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington.
           It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. 
           Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, 
           and the Internet Explorer and Edge web browsers. 
          Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers Microsoft ranked 
          No. 21 in the 2020 Fortune 500 rankings of the largest United States...
          </div>
          <div className='read-more'>Read more</div>
        </li>
      </ul>
    </div>
  )
}

export default TopArticle
