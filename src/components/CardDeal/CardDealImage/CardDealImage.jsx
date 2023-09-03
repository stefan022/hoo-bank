import { card } from '../../../assets'

const CardDealImage = () => {
    return (
        <div className="card-deal__image">
			<img 
                src={card} 
                alt="card" 
                className="card-deal__image-src" 
            />
		</div>
    )
}

export default CardDealImage