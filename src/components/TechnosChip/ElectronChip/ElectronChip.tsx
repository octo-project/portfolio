import '../TechnosChip.css'
import Link from '../../Link'
import Electron from '../../../assets/techsLogo/electron.png'

const ElectronChip = () => {
  return (
    <Link target={'https://www.electronjs.org/'}>
      <div className="chip-card animate white-bg">
        <img src={Electron} className="electron-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default ElectronChip
