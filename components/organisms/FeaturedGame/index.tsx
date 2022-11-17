
import GameItem from '../../molecules/GameItem'

export default function FeaturedGames() {
	return (
		<section className="featured-game pt-50 pb-50">
			<div className="container-fluid">
				<h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
				</h2>
				<div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
					data-aos="fade-up">
					<GameItem thumbnail='thumbnail-1' title='Super Mechs' category="Mobile" />
					<GameItem thumbnail='thumbnail-2' title='Call of Duty: Modern' category="Mobile" />
					<GameItem thumbnail='thumbnail-3' title='Mobile Legends' category="Mobile" />
					<GameItem thumbnail='thumbnail-4' title='Clash Of Clan' category="Mobile" />
					<GameItem thumbnail='thumbnail-5' title='Valorant' category='Desktop' />
				</div>
			</div>
		</section>
	)
}
