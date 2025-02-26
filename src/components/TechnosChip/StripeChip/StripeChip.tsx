import '../TechnosChip.css'
import Link from '../../Link'
import Stripe from '../../../assets/techsLogo/stripe.png'

const StripeChip = () => {
  return (
    <Link target={'https://stripe.com/'}>
      <div className="chip-card animate white-bg">
        <img src={Stripe} className="stripe-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default StripeChip
