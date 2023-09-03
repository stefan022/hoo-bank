import { navLinks } from '../../../constants'
import "./Navigation.scss"

const Navigation = () => {
    return (
        <ul className="navigation">
				{navLinks.map((nav) => (
					<li
						key={nav.id}
						className="navigation__list"
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
        </ul>
    )
}

export default Navigation