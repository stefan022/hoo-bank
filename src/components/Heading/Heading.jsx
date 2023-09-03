import { Divider } from "../../components"

const Heading = ({ headingContentTop, headingContentDown }) => {
    return (
        <h2 className="heading">
            {headingContentTop}
            <Divider/>
            {headingContentDown}
        </h2>
    )
}

export default Heading