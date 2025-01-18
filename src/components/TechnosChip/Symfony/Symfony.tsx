import '../TechnosChip.css'
import Link from '../../Link'
import Symfony4 from '../../../assets/techsLogo/Symfony-4.png'

const SymfonyChip = () => {
  return (
    <Link target={'https://symfony.com/4'}>
      <div className="chip-card animate white-bg">
        <img src={Symfony4} className="symfony-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default SymfonyChip
