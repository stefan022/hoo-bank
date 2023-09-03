import { FeatureSingleCard } from "../../components"
import { features } from "../../constants/features";

const FeatureCards = () => {
    return (
        <div className="business__features">
			{
                features.map((feature) => {
                    const { id, icon, title, content } = feature;

                    return (
                        <FeatureSingleCard 
                            key={id} 
                            icon={icon}
                            title={title}
                            content={content}
                        />
                    )
                })
            }
		</div>
    )
}

export default FeatureCards