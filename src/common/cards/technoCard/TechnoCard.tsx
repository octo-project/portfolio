import './style.css'
import { FC } from 'react'
import { technoCardProps } from './type/technoCardType'
import NodeChip from '../../../components/TechnosChip/NodeChip'
import DenoChip from '../../../components/TechnosChip/DenoChip'
import TauriChip from '../../../components/TechnosChip/TauriChip'
import TailwindChip from '../../../components/TechnosChip/Tailwind'
import SqliteChip from '../../../components/TechnosChip/SqliteChip'
import TypescriptChip from '../../../components/TechnosChip/TypescriptChip'
import ReactNativeChip from '../../../components/TechnosChip/ReactNativeChip'
import { GraphqlChip, PrismaChip, ReactChip } from '../../../components/TechnosChip'

const TechnoCard: FC<technoCardProps> = (props) => {
  const { text} = props

  const GET_TECHNO_CHIP: Record<string, JSX.Element> = {
    "Deno": <DenoChip/>,
    "React": <ReactChip/>,
    "NodeJs": <NodeChip/>,
    "Prisma": <PrismaChip/>,
    "Tauri": <TauriChip/>,
    "Sqlite": <SqliteChip/>,
    "GraphQL": <GraphqlChip/>,
    "Tailwind": <TailwindChip/>,
    "Typescript": <TypescriptChip/>,
    "ReactNative": <ReactNativeChip/>,
  }

  const Chip = GET_TECHNO_CHIP[text]

  return (
    <>
      {Chip}
    </>
  )
}

export default TechnoCard
