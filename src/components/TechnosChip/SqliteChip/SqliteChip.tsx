import '../TechnosChip.css'
import Link from '../../Link'
import Sqlite from '../../../assets/techsLogo/sqlite.jpeg'

const SqliteChip = () => {
  return (
    <Link target={'https://www.sqlite.org/'}>
      <div className="chip-card animate white-bg">
        <img src={Sqlite} className="sqlite-logo" alt="" />
      </div>
    </Link>
  )
}

export default SqliteChip
