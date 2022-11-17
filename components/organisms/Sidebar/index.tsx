import React from 'react'
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

export default function Sidebar() {
	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem icon='overview' title='Overview' active />
					<MenuItem icon='transactions' title='Transactions' />
					<MenuItem icon='messages' title='messages' />
					<MenuItem icon='rewards' title='rewards' />
					<MenuItem icon='settings' title='settings' />
					<MenuItem icon='logout' title='logout' />
				</div>
				<Footer />
			</div>
		</section>
	)
}
