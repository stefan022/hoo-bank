import { CardDealImage, Heading, Paragraph, SectionInfo, Button } from "../../components"

import "./CardDeal.scss";

const CardDeal = () => (
	<section className="card-deal">
		<SectionInfo>
			<Heading
				headingContentTop="Find a better card deal"
				headingContentDown="in few easy steps."
			/>

			<Paragraph
				text="Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
				aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
				additionalClass="max-w-[470px] mt-5"
			/>

			<Button style="mt-10" />
		</SectionInfo>

		<CardDealImage/>
	</section>
);

export default CardDeal;
