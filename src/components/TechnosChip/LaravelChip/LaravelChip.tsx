import '../TechnosChip.css'
import Link from '../../Link'
import LaravelLogo from '../../../assets/techsLogo/laravel-log.png'

const LaravelChip = () => {
  return (
    <Link target={'https://laravel.com/'}>
      <div className="chip-card animate white-bg">
        <img src={LaravelLogo} className="laravel-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default LaravelChip
