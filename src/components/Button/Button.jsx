import "./Button.scss";

const Button = ({ style }) => {
	return (
		<button 
            type="button" 
            className={`
                ${style}
                btn bg-blue-gradient 
            `}>
			Get Started
		</button>
	);
};

export default Button;
