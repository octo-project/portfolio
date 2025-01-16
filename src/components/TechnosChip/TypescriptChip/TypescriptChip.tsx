import '../TechnosChip.css'
import Link from '../../Link'
import Ts from '../../../assets/techsLogo/ts.png'

const TypescriptChip = () => {
  return (
    <Link target={'https://www.typescriptlang.org/'}>
      <div className="chip-card animate">
        <img src={Ts} className="ts-logo" alt="" />
      </div>
    </Link>
  )
}

export default TypescriptChip
