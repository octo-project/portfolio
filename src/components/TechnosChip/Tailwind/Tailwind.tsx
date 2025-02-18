import '../TechnosChip.css'
import Link from '../../Link'
import Tailwind from '../../../assets/techsLogo/tailwindcss.png'

const TailwindChip = () => {
  return (
    <Link target={'https://tailwindcss.com/'}>
      <div className="chip-card animate">
        <img src={Tailwind} className="ts-logo" alt="" />
      </div>
    </Link>
  )
}

export default TailwindChip
