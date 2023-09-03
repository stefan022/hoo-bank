import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials, } from "./components";
import "./App.scss"

const App = () => (
	<div className="app">
		<div className="app__navbar">
			<div className="app__navbar-layout">
				<Navbar />
			</div>
		</div>

		<div className="app__hero">
			<div className="app__hero-layout">
				<Hero />
			</div>
		</div>

		<div className="app__section">
			<div className="app__section-layout">
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
