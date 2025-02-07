import './style.css'
import { FC } from 'react'
import { technoCardProps } from './type/technoCardType'
import NodeChip from '../../../components/TechnosChip/NodeChip'
import TypescriptChip from '../../../components/TechnosChip/TypescriptChip'
import ReactNativeChip from '../../../components/TechnosChip/ReactNativeChip'
import { GraphqlChip, PrismaChip, ReactChip } from '../../../components/TechnosChip'

const TechnoCard: FC<technoCardProps> = (props) => {
  const { text} = props

  const GET_TECHNO_CHIP: Record<string, JSX.Element> = {
    "React": <ReactChip/>,
    "NodeJs": <NodeChip/>,
    "Prisma": <PrismaChip/>,
    "GraphQL": <GraphqlChip/>,
    "Typescript": <TypescriptChip/>,
    "ReactNative": <ReactNativeChip/>
  }

  const Chip = GET_TECHNO_CHIP[text]

  return (
    <>
      {Chip}
    </>
  )
}

export default TechnoCard
