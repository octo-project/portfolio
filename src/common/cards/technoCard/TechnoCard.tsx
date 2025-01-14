import './style.css'
import { FC } from 'react'

interface technoCardProps {
  img: any
  text: string
  width?: number
  height?: number
}

const TechnoCard: FC<technoCardProps> = (props) => {
  const { text, width, height, img } = props

  const tempHeigth = (height && height - 25) || 400

  return (
    <div className="cardTechno animate" style={{ height, width }}>
      {text}
      {img && height && (
        <img
          src={img}
          style={{ height: tempHeigth, width, paddingTop: 7 }}
          alt={text}
        />
      )}
    </div>
  )
}

export default TechnoCard
