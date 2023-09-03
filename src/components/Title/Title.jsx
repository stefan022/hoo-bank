import { Divider, GetStarted } from "../../components"
import "./Title.scss"

const Title = () => {
    return (
        <>
            <div className="title">
                <h1 className="title__top">
                    The Next
                    <Divider/>{" "}
                    <span className="title__top-gradient">Generation</span>
                </h1>

                <div className="title__button">
                    <GetStarted />
                </div>
            </div>
            <h1 className="title__down">
                Payment Method.
            </h1>
        </>
    )
}

export default Title