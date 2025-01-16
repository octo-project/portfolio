import '../TechnosChip.css'
import Link from '../../Link'
import Node from '../../../assets/techsLogo/nodejs.svg'

const NodeChip = () => {
  return (
    <Link target={'https://nodejs.org/en/about'}>
      <div className="chip-card white-bg animate">
        <img src={Node} className="node-logo" alt="" />
      </div>
    </Link>
  )
}

export default NodeChip
