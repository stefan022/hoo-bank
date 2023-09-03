import { discount } from '../../assets'
import style from '../../style'

const Discount = () => {
    return (
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${style.paragraph} ml-2`}>
                <span className="text-white">20%</span> Discount For{" "}
                <span className="text-white">1 Month</span> Account
            </p>
        </div>
    )
}

export default Discount