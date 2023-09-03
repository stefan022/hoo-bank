import { Paragraph, Button } from "../../components";

import "./CTA.scss"

const CTA = () => (
	<section
		className="cta"
	>
		<div className="cta__container">
			<h2 className="cta__container-heading">Let's try our service now!</h2>
			<Paragraph
				text="Everything you need to accept card payments and grow your business
				anywhere on the planet."
				additionalClass="max-w-[470px] mt-5"
			/>
		</div>


		<div className="cta__button">
			<Button />
		</div>
	</section>
);

export default CTA;
