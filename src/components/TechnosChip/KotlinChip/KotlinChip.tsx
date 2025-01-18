import '../TechnosChip.css'
import Link from '../../Link'
import KotlinLogo from '../../../assets/techsLogo/kotlin.png'

const KotlinChip = () => {
  return (
    <Link target={'https://kotlinlang.org/'}>
      <div className="chip-card animate white-bg">
        <img src={KotlinLogo} className="firebase-dl-logo" alt="" />
      </div>
    </Link>
  )
}

export default KotlinChip
