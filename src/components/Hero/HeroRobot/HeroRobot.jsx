import { robot } from '../../../assets'

const HeroRobot = () => {
    return (
        <div className="hero-robot">
			<img
				src={robot}
				alt="robot hand"
				className="hero-robot__image"
			/>
			<div className="hero-robot__gradient-pink"></div>
			<div className="hero-robot__gradient-white"></div>
			<div className="hero-robot__gradient-blue"></div>
		</div>
    )
}

export default HeroRobot