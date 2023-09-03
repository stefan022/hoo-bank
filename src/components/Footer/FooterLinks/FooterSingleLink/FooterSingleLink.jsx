const FooterSingleLink = ({ links }) => {
    return (
        <ul className="footer-links__group_link">
            {
                links.map((link, index) => {
                    const { name } = link;

                    return (
                        <li
                            key={index}
                            className="footer-links__group_link-list"
                        >
                            {name}
                        </li>

                    )
                })
            }
        </ul>
    )
}

export default FooterSingleLink