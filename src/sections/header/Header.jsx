import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header  id="header">
      <div className='container header_containter'>
        <div className='header_profile'>
          <img src ={HeaderImage} alt="Header Portrait"/>
          </div>
          <h3>Ali Taquie</h3>
          <p>
            blah blah blah please give me
          </p>
          <div className='header_cta'>
            <a href = "#contact" className='btn_primary'>Lets Talk</a>
            <a href = "#portfolio" className='btn_light'>My work</a>
          </div>
          <div className='header_socials'>
            {
              data.map(item => <a key ={item.id} href ={item.link} target = "_blank" rel = "noopener noreferrer">{item.icon}</a>)
            }
          </div>
        </div>     
    </header>
  )
}

export default Header 