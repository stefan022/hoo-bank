import { bill } from '../../../assets'

const BillingImage = () => {
    return (
        <div className="billing__image">
			<img src={bill} alt="billing" className="billing__image-src" />

			<div className="billing__image_gradient-white" />
			<div className="billing__image_gradient-pink" />
		</div>
    )
}

export default BillingImage