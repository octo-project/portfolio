import '../TechnosChip.css'
import Link from '../../Link'
import GraphqlLogo from '../../../assets/techsLogo/graphql.png'

const GraphqlChip = () => {
  return (
    <Link target={'https://graphql.org/'}>
      <div className="chip-card animate white-bg">
        <img src={GraphqlLogo} className="graphql-logo" alt="" />
      </div>
    </Link>
  )
}

export default GraphqlChip
