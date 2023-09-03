import { socialMedia } from "../../constants/socialMedia";

import "./SocialMedia.scss";

const SocialMedia = () => {
    return (
        <div className="social-media">
            {
                socialMedia.map((sM) => {
                    const { id, icon } = sM;

                    return (
                        <img
                            key={id}
                            src={icon}
                            alt={id}
                            className="social-media__icon"
                        />
                    )
                })
            }
        </div>
    )
}

export default SocialMedia