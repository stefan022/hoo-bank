import { close, menu } from '../../../assets'

import MenuNavigation from './MenuNavigation/MenuNavigation'
import "./Menu.scss"

const Menu = ({ toggle, handleToggle }) => {
    return (
        <div className="menu">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="menu__logo"
					onClick={handleToggle}
				/>

				<div
					className={ toggle ? "menu__container" : "menu__container-hidden" }
				>
                    <MenuNavigation/>
				</div>
			</div>
    )
}

export default Menu