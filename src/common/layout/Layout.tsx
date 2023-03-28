import './style.css'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../contact/Contact'
import FbIcon from '../../assets/Portfolio Design V2/Assets/Fb.png'
import GoogleIcon from '../../assets/Portfolio Design V2/Assets/Google.png'
import LinkedInIcon from '../../assets/Portfolio Design V2/Assets/linkedin.png'
import MyCvPicture from '../../assets/capture.png'

interface layoutProps {
  children: any
}

const Layout: FC<layoutProps> = (props) => {
  const { children } = props

  return (
    <div className="container">
      <div className="navigation">
        <div>
          <h4>TSIALONINA Heriniaina Mathieu</h4>
        </div>
        <div className="menu">
          <Link to="/cv" style={{ textDecoration: 'none', flex: '0 1 100px' }}>
            <div className="btn cvBtn">CV</div>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', flex: 1 }}>
            <div className="btn projectBtn">
              <div className="statProject">
                <span className="totalProjects">06</span>
                <span className="subTitleProject">since 2021</span>
              </div>
              Mes projects
            </div>
          </Link>
        </div>
        <div className="p10">
          <div className="contactBtn">
            <span className="menuTitle"> Contacts</span>
            <div>
              <Contact icon={FbIcon} contact="TSIALONINA Heriniaina Mathieu" />
              <Contact
                icon={GoogleIcon}
                contact="hmathieutsialonina@gmail.com"
              />
              <Contact
                icon={LinkedInIcon}
                contact="TSIALONINA Heriniaina Mathieu"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="tooltip">
            <span className="name">@TSIALONINA Heriniaina Mathieu</span>
            <span className="tooltiptext">
              <img src={MyCvPicture} alt="Votre image" />
              <span className="description">Dev Full Stack JS</span>
            </span>
          </div>
        </div>
      </div>
      <div className="root">
        <div className="hamburger-menu" id="menu-button">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
