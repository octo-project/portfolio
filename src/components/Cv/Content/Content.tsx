import "./content.css"
import { FC, useContext } from 'react'
import Diplome from './Diplome/Diplome';
import Parcour from "./Parcour/Parcour";
import Passion from "./Passion/Passion";
import Experience from "./Experience/Experience";
import { CV_TAB } from "../../../reducer/CvReducer/CvReducer";
import {CvContext} from '../../../provider/CvProvider/CvProvider';

const Content:FC = () => {
    const {currentTab} = useContext(CvContext);

    const GET_CURRENT_COMPONENT: Record<CV_TAB, any> ={
        Dîplome: <Diplome/>,
        Experience:  <Experience/>,
        Parcour: <Parcour/>,
        Passion:  <Passion/>

    }

    return (
        <div className="contentContainer">
            {GET_CURRENT_COMPONENT[currentTab]}
        </div>
    )
}

export default Content;