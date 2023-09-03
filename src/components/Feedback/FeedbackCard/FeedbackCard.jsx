import { FeedbackCardContainer, FeedbackCardContent, FeedbackCardQuotes } from "../../../components"

const FeedbackCard = ({ content, name, title, img }) => (
	<div className="feedback-card">
		<div className="feedback-card__gradient-blue" />
		<FeedbackCardQuotes/>
        <FeedbackCardContent
            content={content}
        />
        <FeedbackCardContainer
            img={img}
            name={name}
            title={title}
        />
	</div>
);

export default FeedbackCard;
