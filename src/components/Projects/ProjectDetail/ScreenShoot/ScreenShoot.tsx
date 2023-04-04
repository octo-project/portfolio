import React, { FC } from 'react'
import TechnoCard from '../../../../common/cards/technoCard/TechnoCard'

interface ScreenShootProps {
  screenShoots: any[]
}

const Screenshoot: FC<ScreenShootProps> = (props) => {
  const { screenShoots } = props
  return (
    <div className="projectDetails">
      <h5>
        Demo : <u>https://podcast-app-web.com</u>
      </h5>
      <div className="screenShootMobile">
        {screenShoots.map((item) => {
          return (
            <TechnoCard
              text={item.label}
              img={item.image}
              width={200}
              height={400}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Screenshoot
