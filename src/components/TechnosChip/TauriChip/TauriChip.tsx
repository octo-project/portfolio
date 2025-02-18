import '../TechnosChip.css'
import Link from '../../Link'
import Tauri from '../../../assets/techsLogo/tauri.png'

const TauriChip = () => {
  return (
    <Link target={'https://v2.tauri.app/fr/'}>
      <div className="chip-card animate white-bg">
        <img src={Tauri} className="tauri-logo" alt="" />
      </div>
    </Link>
  )
}

export default TauriChip
