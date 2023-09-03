import { apple, google } from '../../../assets'

const BillingStore = () => {
    return (
        <div className="billing__store">
            <img
                src={apple}
                alt="app store"
                className="billing__store-apple"
            />
            <img
                src={google}
                alt="google play"
                className="billing__store-google"
            />
        </div>
    )
}

export default BillingStore