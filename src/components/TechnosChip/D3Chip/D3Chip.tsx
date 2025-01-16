import '../TechnosChip.css'
import Link from '../../Link'
import D3 from '../../../assets/techsLogo/d3-js.png'

const D3Chip = () => {
  return (
    <Link target={'https://d3js.org/'}>
      <div className="chip-card animate white-bg">
        <img src={D3} className="ant-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default D3Chip
