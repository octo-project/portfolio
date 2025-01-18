import '../TechnosChip.css'
import Link from '../../Link'
import PrismaLogo from '../../../assets/techsLogo/prisma.png'

const PrismaChip = () => {
  return (
    <Link target={'https://www.prisma.io/?via=start&gad_source=1&gclid=Cj0KCQiAv628BhC2ARIsAIJIiK_9vQPnLH-9ohZ0Y9qoBfHayvT82hmOCWZ8eXPri1b7qDGKFCCYw7EaAn4iEALw_wcB'}>
      <div className="chip-card animate white-bg">
        <img src={PrismaLogo} className="prisma-logo" alt="" />
      </div>
    </Link>
  )
}

export default PrismaChip
