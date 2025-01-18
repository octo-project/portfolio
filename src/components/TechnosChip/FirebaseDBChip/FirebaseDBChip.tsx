import '../TechnosChip.css'
import Link from '../../Link'
import FirebaseDB from '../../../assets/techsLogo/firebase_db.png'

const FirebaseDBChip = () => {
  return (
    <Link target={'https://firebase.google.com/docs/database'}>
      <div className="chip-card animate white-bg">
        <img src={FirebaseDB} className="firebase-logo" alt="" />
      </div>
    </Link>
  )
}

export default FirebaseDBChip
