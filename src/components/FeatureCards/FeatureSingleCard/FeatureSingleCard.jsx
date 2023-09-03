import "./FeatureSingleCard.scss";

const FeatureSingleCard = ({ icon, title, content }) => (
	<div className="feature-card" >
		<div className="feature-card__left">
			<img 
                src={icon} 
                alt="icon" 
                className="feature-card__left-icon" 
            />
		</div>

		<div className="feature-card__right">
			<h4 className="feature-card__right-title">
				{title}
			</h4>
			<p className="feature-card__right-content">
				{content}
			</p>
		</div>
	</div>
);

export default FeatureSingleCard