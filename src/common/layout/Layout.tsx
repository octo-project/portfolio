import './style.css'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../contact/Contact'
import { RootState } from '../../redux/store'
import MyCvPicture from '../../assets/capture.png'
import {  useDispatch, useSelector } from "react-redux"
import { setLocale } from '../../redux/slice/app-slice'
import reactLogo from '../../assets/techsLogo/react.png'
import pythonLogo from '../../assets/techsLogo/python.png'
import nestJSLogo from '../../assets/techsLogo/nestJs.png'
import laravelLogo from '../../assets/techsLogo/laravel.png'
import { useLocalFormatHook } from '../hooks/localFormatHook'
import FbIcon from '../../assets/Portfolio Design V2/Assets/Fb.png'
import GoogleIcon from '../../assets/Portfolio Design V2/Assets/Google.png'
import LinkedInIcon from '../../assets/Portfolio Design V2/Assets/linkedin.png'

interface layoutProps {
  children: any
}

const Layout: FC<layoutProps> = (props: { children: any }) => {
  const { children } = props
  const dispatch = useDispatch()
  const {formatText} = useLocalFormatHook()
  const locale = useSelector((state: RootState) => state.app.locale);

  const isActivex = localStorage.getItem("IsActive") === "true";
  const [isActive, setActive] = useState(isActivex)

  const toggleDrawer = () => {
    setActive(!isActive)
    localStorage.setItem("IsActive", `${!isActive}`);
  }

  const changeLocal = (local: string) => {
    dispatch(setLocale(local))
  }

  return (
    <div className="container">
      <div className={isActive ? 'navigation active' : 'navigation'}>
        <div className="header-title">
          <div className="tooltip">
            <span style={{cursor: 'pointer'}}>TSIALONINA Heriniaina Mathieu</span>
            <span className="tooltiptext">
              <img src={MyCvPicture} alt="Svg" />
              <div className='separator'></div>
              <div className='tooltipDescription'>
                <span className="description">Dev Full Stack</span>
                <span>Code l'avenir, des pixels au back-end 🚀</span>
                <div>
                  <img src={reactLogo} style={{width: 34, height: 29}} alt="react" />
                  <img src={laravelLogo} style={{width: 29, height: 29}} alt="react" />
                  <img src={pythonLogo} style={{width: 29, height: 29}} alt="react" />
                  <img src={nestJSLogo} style={{width: 29, height: 29}} alt="react" />
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="menu">
          <Link to="/cv" style={{ textDecoration: 'none', flex: '0 1 100px' }}>
            <div className="btn cvBtn">CV</div>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', flex: 1 }}>
            <div className="btn projectBtn">
              {/* <div className="statProject">
                <span className="totalProjects">06</span>
                <span className="subTitleProject">since 2021</span>
              </div> */}
              {formatText("myProjects")}
            </div>
          </Link>
        </div>
        <div className="p10">
          <div className="contactBtn">
            <span className="menuTitle">{formatText("contact")}</span>
            <div className='icon-container'>
              <Contact 
                icon={FbIcon}
                link={'https://www.facebook.com/profile.php?id=100008382949411'} />
              <Contact
                icon={GoogleIcon}
                link={'mailto:hmathieutsialonina@gmail.com'}
              />
              <Contact
                icon={LinkedInIcon}
                link={'https://www.linkedin.com/in/heriniaina-mathieu-tsialonina-79a724209/'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="root">
        <div
          id="menu-button"
          onClick={toggleDrawer}
          className={isActive ? 'hamburger-menu active' : 'hamburger-menu'}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className='local-btn'>
          <button className={`btn-local-style ${locale === "fr" ? "active" : ""}`} onClick={() => changeLocal('fr')}>fr</button>
          <button className={`btn-local-style ${locale === "en" ? "active" : ""}`} onClick={() => changeLocal('en')}>en</button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
