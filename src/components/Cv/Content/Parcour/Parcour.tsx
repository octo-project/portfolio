import { FC } from 'react'

const Parcour: FC = () => {
  return (
    <div className="content">
      <h3>Parcours</h3>
      <div className="parcour-container">
        <div className="rounded">
          <div>2013 - 2014</div>
          <div>College</div>
          <div>Sacre coeur Tsianaloka</div>
        </div>
        <div className="rounded">
          <div>2010 - 2013</div>
          <div>Baccalaureat serie D</div>
          <div>St Michel Itaosy</div>
        </div>
        <div className="rounded">
          <div>2014 - 2016</div>
          <div>License en IGGLIA</div>
          <div>ISPM</div>
        </div>
        <div className="rounded">
          <div>2016 - 2018</div>
          <div>Master en IGGLIA</div>
          <div>ISPM</div>
        </div>
      </div>
    </div>
  )
}

export default Parcour
