import { FooterSingleLink } from "../../../components"
import { footer } from '../../../constants/footer'

const FooterLinks = () => {
    return (
        <div className="footer-links">
            {
                footer.map((footerLink, index) => {
                    const { links, title } = footerLink;

                    return (
                        <div
                            key={index}
                            className="footer-links__group"
                        >
                            <h4 className="footer-links__group-title"> {title} </h4>
                            <FooterSingleLink
                                links={links}
                            />
                        </div>

                    )
                })
            }
        </div>
    )
}

export default FooterLinks