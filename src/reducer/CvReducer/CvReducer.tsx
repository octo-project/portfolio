
export type CV_TAB = "Dîplome" | "Parcour" | "Experience" | "Passion"

export interface CvStateType{
    currentTab: CV_TAB
}

export const CV_INITIALE_STATE: CvStateType = {
    currentTab: 'Dîplome'
}

export const SET_CURRENT_TAB = 'SET_CURRENT_TAB'

export type action_type = 'SET_CURRENT_TAB' 

export const cvReducer = (state: CvStateType, action: any) => {
    switch (action.type) {
        case 'SET_CURRENT_TAB':
            return {
                ...state,
                currentTab: action.value
            }
    
        default:
            break;
    }
    return state;
}