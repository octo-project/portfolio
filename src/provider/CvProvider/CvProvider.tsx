import React, { createContext, FC, useReducer } from 'react'
import { cvReducer, CV_INITIALE_STATE, CV_TAB } from '../../reducer/CvReducer/CvReducer';

export interface CvContextType {
    currentTab: CV_TAB
    dispatchCvState: (action: any) => void;
}

export const CvContext = createContext<CvContextType>({
    currentTab: 'Dîplome',
    dispatchCvState: (action: any) => null,
});

interface CvProviderProps{
    children?: any
}

const CvProvider: FC<CvProviderProps> = (props) => {
    
    const {children} = props;
    const [cvState, dispatchCvState] = useReducer(cvReducer, CV_INITIALE_STATE)

    return (
        <CvContext.Provider
            value={{
                currentTab: cvState.currentTab,
                dispatchCvState
            }}
        >
            {children}
        </CvContext.Provider>
    )
}

export default CvProvider