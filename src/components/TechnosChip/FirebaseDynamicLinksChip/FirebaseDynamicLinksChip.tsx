import '../TechnosChip.css'
import Link from '../../Link'
import FirebaseDynamicLinksLogo from '../../../assets/techsLogo/firebase_dynamic_links.png'

const FirebaseDynamicLinkChip = () => {
  return (
    <Link target={'https://firebase.google.com/docs/dynamic-links'}>
      <div className="chip-card animate white-bg">
        <img src={FirebaseDynamicLinksLogo} className="firebase-dl-logo" alt="" />
      </div>
    </Link>
  )
}

export default FirebaseDynamicLinkChip
