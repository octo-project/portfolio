import '../TechnosChip.css'
import Link from '../../Link'
import Deno from '../../../assets/techsLogo/deno.png'

const DenoChip = () => {
  return (
    <Link target={'https://deno.com/'}>
      <div className="chip-card animate">
        <img src={Deno} className="ts-logo" alt="" />
      </div>
    </Link>
  )
}

export default DenoChip
