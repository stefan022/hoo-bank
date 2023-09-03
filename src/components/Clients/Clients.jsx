import { SingleClient } from "../../components"
import { clients } from "../../constants/clients";

import "./Clients.scss";

const Clients = () => (
	<section className="clients">
		<div className="clients__container">
			{
                clients.map((client) => {
                    const { id, logo } = client;

                    return (
                        <SingleClient
                            key={id}
                            logo={logo}
                        />
                    )
                })
            }
		</div>
	</section>
);

export default Clients;
