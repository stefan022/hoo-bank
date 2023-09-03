import { FeedbackCard } from "../../components"
import { feedback } from '../../constants/feedback'

import "./Feedback.scss"

const Feedback = () => {
    return (
        <div className="feedback">
			{
                feedback.map((card) => {
                    const { id, content, name, title, img } = card;

                    return (
                        <FeedbackCard 
                            key={id} 
                            content={content}
                            name={name}
                            title={title}
                            img={img}
                        />
                    )
                })
            }
		</div>
    )
}

export default Feedback