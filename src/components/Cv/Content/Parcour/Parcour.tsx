import { FC } from 'react'

interface ParcourProps {
  refer: React.MutableRefObject<null>
}

const Parcour: FC<ParcourProps> = (props) => {
  const { refer } = props
  return (
    <section className="content" ref={refer}>
      <h3>Parcours</h3>
      <div className="parcour-container">
        <div className="rounded">
          <div>2011 - 2012</div>
          <div>College</div>
          <div>Sacre coeur Tsianaloka</div>
        </div>
        <div className="rounded">
          <div>2013 - 2014</div>
          <div>Baccalaureat serie D</div>
          <div>St Michel Itaosy</div>
        </div>
        <div className="rounded">
          <div>2017 - 2018</div>
          <div>License en IGGLIA</div>
          <div>ISPM</div>
          <div>Chrysalide Madagascar</div>
        </div>
        <div className="rounded">
          <div>2020 - 2021</div>
          <div>Master en IGGLIA</div>
          <div>ISPM</div>
          <div>Hairun Technology</div>
        </div>
      </div>
    </section>
  )
}

export default Parcour
