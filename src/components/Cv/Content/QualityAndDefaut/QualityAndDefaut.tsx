import React, { FC } from 'react'
import { useLocalFormatHook } from '../../../../common/hooks/localFormatHook'

interface QualityAndDefaultProps {
  refer: React.MutableRefObject<null>
}

const QualityAndDefaut: FC<QualityAndDefaultProps> = (props) => {
  const { refer } = props
  const {formatText} = useLocalFormatHook()

  return (
    <section className="content" ref={refer}>
      <h3>{formatText("qualityTitle")}</h3>
      <div className="qualityContainer">
        <div className="qualityContent">
          <span className="qualitySubTitle">{formatText("Quality")}</span>
          <div>
            <ul>
              <li className="quality-item ">
                {formatText("quality1")}
              </li>
              <li className="quality-item">
                {formatText("quality2")}
              </li>
              <li className="quality-item">
                {formatText("quality3")}
              </li>
              <li className="quality-item">
                {formatText("quality4")}
              </li>
            </ul>
          </div>
        </div>
        <div className="defautContent">
          <span className="qualitySubTitle">{formatText("Weakness")}</span>
          <div>
            <ul>
              <li className="defaut-item">
                {formatText("weakness1")}
              </li>
              <li className="defaut-item">
                {formatText("weakness2")}
              </li>
              <li className="defaut-item">
                {formatText("weakness3")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualityAndDefaut
