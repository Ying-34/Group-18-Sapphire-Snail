import Nav from '../../components/Nav/Nav'
//import snipaste from '../../assets/imgs/snipaste.png'
import Snail1 from '../../assets/imgs/Snail1.jpeg'
import Snail3 from '../../assets/imgs/Snail3.jpeg'
import Snail4 from '../../assets/imgs/Snail4.jpeg'
import Snail5 from '../../assets/imgs/Snail5.jpeg'
import './contactUs.css'

const ContactUs = () => {
  return (
    <div className='contact-us-container'>
      <Nav />
      <ul className='contact-us'>
        <li className='contact-li intro'>
          If you have any questions, please contact us. Thank you!
        </li>
        <li className='contact-li'>
          <img className='avatar-img1' src={Snail1} alt='' />

          <div className='right'>
            <div className='information'>
              <span className='weak'> Name：</span>
              Chloe
            </div>
            <div className='information'>
              <span className='weak'> Address：</span>
              Auckland City, NZ
            </div>
            <div className='information'>
              <span className='weak'> Email：</span>
              lli708@aucklanduni.ac.nz
            </div>
          </div>
        </li>

        <li className='contact-li'>

          <img className='avatar-img5' src={Snail5} alt='' />

          <div className='right'>
            <div className='information'>
              <span className='weak'> Name：</span>
              Tom
            </div>
            <div className='information'>
              <span className='weak'>Address：</span>
              uckland City, NZ
            </div>
            <div className='information'>
              <span className='weak'>Email：</span>
              mwan676@aucklanduni.ac.nz
            </div>
          </div>
        </li>

        <li className='contact-li'>

          <img className='avatar-img3' src={Snail3} alt='' />

          <div className='right'>
            <div className='information'>
              <span className='weak'>Name：</span>
              Yvonne
            </div>
            <div className='information'>
              <span className='weak'> Address：</span>Auckland City, NZ
            </div>
            <div className='information'>
              <span className='weak'> Email：</span>yxun640@aucklanduni.ac.nz
            </div>
          </div>
        </li>

        <li className='contact-li'>

          <img className='avatar-img4' src={Snail4} alt='' />

          <div className='right'>
            <div className='information'>
              <span className='weak'>Name：</span>Winona
            </div>
            <div className='information'>
              <span className='weak'> Address：</span>Jiangxi, China
            </div>
            <div className='information'>
              <span className='weak'> Email：</span>yzho453@aucklanduni.ac.nz
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ContactUs
