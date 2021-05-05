import Nav from '../../components/Nav/Nav'
import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <Nav />

      <div className='about-us-wrapper'>
        <div className='about'>
          <p className='title'>Our story</p>
          <p className='item'>
            Sapphire snail is a social online search forum based on Wikipedia. It enables users to
            read relevant knowledge and comment on text information at the same time. The software
            and its contents are only used by CompSci 732 assignment.
          </p>
          <p className='item'>
            When you use Wikipedia, do you think the process of reading one-sided is very boring? No
            comment, no interaction, only black and white text.
          </p>
          <p className='item'>
            Sapphire snail is determined to build a social Wikipedia forum that can interact with
            each other. The project was founded by Chloe, Tom, Yvonne and Winona, members of group
            18. Now a complete web app is provided, users can get social interaction in the process
            of reading through comments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
