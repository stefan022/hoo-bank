import { navLinks } from '../../../../constants/navLinks'

const MenuNavigation = () => {
    return (
        <ul className="menu-navigation">
            {
                navLinks.map((nav) => {
                    const { id, title } = nav;

                    return (

                        <li
                            key={id}
                            className="menu-navigation__list"
                        >
                            <a href={`#${id}`}>{title}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MenuNavigation