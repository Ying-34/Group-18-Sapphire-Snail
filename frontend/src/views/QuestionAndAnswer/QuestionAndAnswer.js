import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import './questionAndAnswer.css'

const QuestionAndAnswer = () => {
  return (
    <div className='question-answer-container'>
      <Nav />

      <div className='question-answer'>
        <p className='title'>Q & A</p>
        <div className='item'>
          <div className='question'>What is a sapphire snail?</div>
          Sapphire snail is a social forum based on Wikipedia, which means that you can annotate and
          comment on text messages.
          <Link to='/about-us' className='read-more'>
            Read More
          </Link>
        </div>

        <div className='item'>
          <div className='question'>How to conduct information retrieval?</div>
          <div>
            On the homepage of sapphire snail, there is a big search box where you can search for
            the keywords you need.
          </div>
          <div style={{ marginTop: '8px' }}>
            In addition, in the upper right corner of the page, there is a smaller search box. You
            can use it to search on any page.
          </div>
        </div>

        <div className='item'>
          <div className='question'>Why can't I comment?</div>
          <div>
            In order to ensure the rights and interests of users, we require users to log in to the
            account before they can comment.
          </div>
          <div style={{ marginTop: '8px' }}>
            You can see the register and login buttons at the top right of the page. New users need
            to register their accounts first.
          </div>
        </div>

        <div className='contact-us-item'>
          If the above list does not answer your questions, please contact our development team. You
          can get our contact information at
          <Link to='/contact-us' className='contact-us'>
            Contact Us
          </Link>.
        </div>
      </div>
    </div>
  )
}

export default QuestionAndAnswer
