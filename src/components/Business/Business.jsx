import { FeatureCards, Heading, Paragraph, SectionInfo } from "../../components"
import Button from "../Button";

import "./Business.scss";

const Business = () => (
	<section id="features" className="business">
		<SectionInfo>
            <Heading
                headingContentTop="You do the business,"
                headingContentDown="we'll handle the money."
            />

            <Paragraph
                text="With the right credit card, you can improve your financial life by
				building credit, earning rewards and saving money. But with hundreds of
				credit cards on the market."
                additionalClass="max-w-[470px] mt-5"
            />

			<Button style="mt-10" />
		</SectionInfo>

        <FeatureCards/>
	</section>
);

export default Business;
