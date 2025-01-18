import '../TechnosChip.css'
import Link from '../../Link'
import FirebaseAuth from '../../../assets/techsLogo/firebase_authentification.png'

const FirebaseAuthChip = () => {
  return (
    <Link target={'https://firebase.google.com/docs/auth'}>
      <div className="chip-card animate white-bg">
        <img src={FirebaseAuth} className="firebase-auth-logo" alt="" />
      </div>
    </Link>
  )
}

export default FirebaseAuthChip
