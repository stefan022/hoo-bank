import { discount } from '../../assets'

import "./Discount.scss";

const Discount = () => {
    return (
        <div className="discount">
            <img 
                src={discount} 
                alt="discount" 
                className="discount__image" 
            />
            <p className="discount__content">
                <span className="discount__content-span">20%</span> Discount For{" "}
                <span className="discount__content-span">1 Month</span> Account
            </p>
        </div>
    )
}

export default Discount