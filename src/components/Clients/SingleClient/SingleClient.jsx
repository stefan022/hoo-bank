import "./SingleClient.scss"

const SingleClient = ({ logo }) => (
    <div className="single-client" >
        <img
            src={logo}
            className="single-client__logo"
        />
    </div>
)

export default SingleClient