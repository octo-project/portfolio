import '../TechnosChip.css'
import Link from '../../Link'
import ReactNativeLogo from '../../../assets/techsLogo/react-native.png'

const ReactNativeChip = () => {
  return (
    <Link target={'https://reactnative.dev/'}>
      <div className="chip-card animate white-bg">
        <img src={ReactNativeLogo} className="react-native-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default ReactNativeChip
