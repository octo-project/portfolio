import '../TechnosChip.css'
import Link from '../../Link'
import GatsbyLogo from '../../../assets/techsLogo/gatsby.png'

const Gatsby = () => {
  return (
    <Link target={'https://www.gatsbyjs.com/'}>
      <div className="chip-card animate">
        <img src={GatsbyLogo} className="gatsby-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default Gatsby
