import '../TechnosChip.css'
import Link from '../../Link'
import AntD from '../../../assets/techsLogo/Ant.png'

const AntDesignChip = () => {
  return (
    <Link target={'https://ant.design/'}>
      <div className="chip-card animate white-bg">
        <img src={AntD} className="ant-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default AntDesignChip
