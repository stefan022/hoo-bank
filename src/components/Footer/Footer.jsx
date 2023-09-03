import { FooterLogo, FooterLinks, Copyright, SocialMedia } from "../../components"

import "./Footer.scss";

const Footer = () => (
	<section className="footer">
		<div className="footer__container">
            <FooterLogo/>
			<FooterLinks/>
		</div>

		<div className="footer__casm">
            <Copyright/>
            <SocialMedia/>
		</div>
	</section>
);

export default Footer;
