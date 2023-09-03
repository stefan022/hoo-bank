const FeedbackCardContainer = ({ img, name, title }) => {
    return (
        <div className="feedback-card__container">
			<img src={img} className="feedback-card__container-image" />

			<div className="feedback-card__container_info">
				<h4 className="feedback-card__container_info-name">
					{name}
				</h4>
				<p className="feedback-card__container_info-title">
					{title}
				</p>
			</div>
		</div>
    )
}

export default FeedbackCardContainer