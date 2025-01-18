import '../TechnosChip.css'
import Link from '../../Link'
import PythonLogo from '../../../assets/techsLogo/python-logo.png'

const PythonChip = () => {
  return (
    <Link target={'https://www.python.org/about/'}>
      <div className="chip-card animate white-bg">
        <img src={PythonLogo} className="python-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default PythonChip
