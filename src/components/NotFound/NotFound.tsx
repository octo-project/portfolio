import "./notFound.css"
import notFoundImg from '../../assets/404.png'
import { useLocalFormatHook } from "../../common/hooks/localFormatHook"

const NotFound = () => {
    const {formatText} = useLocalFormatHook()

    return (
        <div className="not-found-container">
            <div className="not-found">
                <div className="align-center">
                    <img src={notFoundImg} alt="not found" className="not-found-img" />
                </div>
                <h2>
                    {formatText("notFoundTitle")}
                </h2>
                <p>
                    {formatText("notFoundDescription")}
                </p>
                <a href="/">{formatText("notFoundBack")}</a>
            </div>
        </div>
    )
}

export default NotFound