import { FC } from 'react'
import CvProvider from './CvProvider/CvProvider'

interface ProviderProps {}

const Provider: FC<ProviderProps> = (props) => (
    <CvProvider>
        {props.children}
    </CvProvider>
)

export default Provider