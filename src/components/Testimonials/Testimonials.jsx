import { Heading, Paragraph, Feedback } from "../../components";

import "./Testimonials.scss";

const Testimonials = () => (
	<section id="clients" className="testimonials" >
		<div className="testimonials__info">
			<Heading
				headingContentTop="What people are"
				headingContentDown="saying about us"
			/>

			<div className="testimonials__info-paragraph">
				<Paragraph
					text="Everything you need to accept card payments and grow your business
					anywhere on the planet."
				/>
			</div>
		</div>

		<Feedback/>
	</section>
);

export default Testimonials;
