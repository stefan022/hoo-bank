import { Paragraph } from "../../../../components"
import { logo } from '../../../../assets'

const FooterLogo = () => {
    return (
        <div className="footer-logo">
            <img
                src={logo}
                alt="hoobank"
                className="footer-logo__src"
            />
            <Paragraph
                text="A new way to make the payments easy, reliable and secure."
                additionalClass="mt-4 max-w-[310px]"
            />
        </div>
    )
}

export default FooterLogo