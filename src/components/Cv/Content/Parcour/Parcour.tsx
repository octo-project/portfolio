import { FC } from 'react'
import { useLocalFormatHook } from '../../../../common/hooks/localFormatHook'

interface ParcourProps {
  refer: React.MutableRefObject<null>
}

const Parcour: FC<ParcourProps> = (props) => {
  const { refer } = props
  const {formatText} = useLocalFormatHook()
  
  return (
    <section className="content" ref={refer}>
      <h3>{formatText("academicCarrer")}</h3>
      <div className="parcour-container">
        <div className="rounded">
          <div className='italic'>2011 - 2012</div>
          <div className='degrees'>CEPE </div>
          <div>Au Collège Sacré coeur Tulear</div>
        </div>
        <div className="rounded">
          <div className='italic'>2013 - 2014</div>
          <div className='degrees'>Baccalauréat Scientifique</div>
          <div>Au Lycée St Michel Itaosy</div>
        </div>
        <div className="rounded">
          <div className='italic'>2017 - 2018</div>
          <div className='degrees'>Licence en Informatique</div>
          <div>
            <a href="https://ispm-edu.com/index.php" target='_blank' rel='noopener noreferrer'>à L'ISPM</a>
          </div>
        </div>
        <div className="rounded">
          <div className='italic'>2020 - 2021</div>
          <div className='degrees'>Master en Informatique</div>
          <div>
            <a href="https://ispm-edu.com/index.php" target='_blank' rel='noopener noreferrer'>à L'ISPM</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parcour
