import '../TechnosChip.css'
import Link from '../../Link'
import ApiPlatforme from '../../../assets/techsLogo/api-platforme.png'

const ApiPlatformeChip = () => {
  return (
    <Link target={'https://api-platform.com/'}>
      <div className="chip-card animate white-bg">
        <img src={ApiPlatforme} className="api-platform-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default ApiPlatformeChip
