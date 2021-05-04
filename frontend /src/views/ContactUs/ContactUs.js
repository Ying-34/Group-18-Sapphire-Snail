import Nav from '../../components/Nav/Nav'
import snipaste from '../../assets/imgs/snipaste.png'
import './contactUs.css'

const ContactUs = () => {
  return (
    <div className='contact-us-container'>
      <Nav />
      <ul className='contact-us'>
        <li className='contact-li intro'>
          If you have any questions, please contact us. Thank you
        </li>
        <li className='contact-li'>
          <img className='avatar-img' src={snipaste} alt='' />
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
          <img className='avatar-img' src={snipaste} alt='' />
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
          <img className='avatar-img' src={snipaste} alt='' />
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
          <img className='avatar-img' src={snipaste} alt='' />
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
