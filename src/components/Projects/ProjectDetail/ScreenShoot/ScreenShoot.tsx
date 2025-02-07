import { FC } from 'react'
import TechnoCard from '../../../../common/cards/technoCard/TechnoCard'

interface ScreenShootProps {
  screenShoots: any[];
  screenShootType: string;
}

const Screenshoot: FC<ScreenShootProps> = (props) => {
  
  const { screenShoots , screenShootType} = props
  const containerClass = screenShootType === 'Mobile' ? 'screenShootMobile' : 'screenShootWeb'
  const isForWeb = screenShootType === 'Web'

  return (
    <div className="projectDetails">
      <h5>
        Demo : <u>https://podcast-app-web.com</u>
      </h5>
      <div className={containerClass}>
        {screenShoots.map((item) => {
          const customWidth = item?.large ? "w-auto" : "w-[200px]"
          return (
            <TechnoCard
              text={item.label}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Screenshoot
