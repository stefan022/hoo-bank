import { stats } from "../../constants/stats";
import "./Stats.scss";

const Stats = () => (
	<section className="stats">
		{
			stats.map((stat) => {
				const { id, title, value } = stat;

				return (
					<div
						key={id}
						className="stats__content"
					>
						<h4 className="stats__content-value">
							{value}
						</h4>
						<p className="stats__content-title">
							{title}
						</p>
					</div>

				)
			})
		}
	</section>
);

export default Stats;
