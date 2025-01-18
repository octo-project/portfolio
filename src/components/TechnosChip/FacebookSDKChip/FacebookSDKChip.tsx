import '../TechnosChip.css'
import Link from '../../Link'
import FacebookLogo from '../../../assets/techsLogo/facebook.png'

const FacebookSDKChip = () => {
  return (
    <Link target={'https://developers.facebook.com/docs/business-sdk/getting-started/'}>
      <div className="chip-card flex animate white-bg">
        <img src={FacebookLogo} className="fb-sdk-logo" alt="card content" />
        <span className='logo-black-blue custom'>Facebook SDK</span>
      </div>
    </Link>
  )
}

export default FacebookSDKChip
