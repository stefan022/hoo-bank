import { Discount, GetStarted, HeroRobot, Paragraph, Title } from "../../components"

import "./Hero.scss";

const Hero = () => (
	<section id="home" className="hero">
		<div className="hero__container">
			<Discount/>

			<Title/>

			<Paragraph
                text="Our team of experts uses a methodology to identify the credit cards most
                likely to fit your needs. We examine annual percentage rates, annual
                fees."
				additionalClass="max-w-[470px] mt-5"
            />
		</div>

		<HeroRobot/>

		<div className="hero__button">
			<GetStarted />
		</div>
	</section>
);

export default Hero;
