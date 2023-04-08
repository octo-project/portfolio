import React, { FC } from 'react'

interface DiplomeProps {
  refer: React.MutableRefObject<null>
}

const Diplome: FC<DiplomeProps> = (props) => {
  const { refer } = props

  return (
    <section className="content" ref={refer}>
      <h3>Dîplomes et certifications</h3>
      <ul>
        <li>
          <h5>2013-2014</h5>
          <p>Diplome de Baccalaureat serie D au Saint Michel Itaosy.</p>
        </li>
        <li>
          <h5>2017-2018</h5>
          <p>
            Diplome de license en Informatique de Gestion et Genie Logiciel a
            l'ISPM.
          </p>
        </li>
        <li>
          <h5>2020-2021</h5>
          <p>
            Diplome de master en Informatique de Gestion et Genie Logiciel a
            l'ISPM.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Diplome
