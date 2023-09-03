import { BillingImage, BillingStore, Heading, Paragraph, SectionInfo } from "../../components";

import "./Billing.scss";

const Billing = () => (
	<section id="product" className="billing">
		<BillingImage/>
		<SectionInfo>
			<Heading
				headingContentTop="Easily control your"
				headingContentDown="billing & invoicing."
			/>
			<Paragraph
				text="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."
				additionalClass="max-w-[470px] mt-5"
			/>
            <BillingStore />
		</SectionInfo>
	</section>
);

export default Billing;
