import './style.css'
import { FC } from 'react'
import Header from './Header/Header'
import Content from './Content/Content'

const MyCv: FC = () => {
  return (
    <div className="cvContainer titleCv">
      <h3>CV</h3>
      <Header />
      <Content />
    </div>
  )
}

export default MyCv
