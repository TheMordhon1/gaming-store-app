import React from 'react'
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

interface sidebarProps {
	activeMenu: "overview" | "transactions" | "messages" | "rewards" | "settings";
}
export default function Sidebar(props: sidebarProps) {
	const { activeMenu } = props
	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem icon='overview' href="/member" title='Overview' active={activeMenu === "overview"} />
					<MenuItem icon='transactions' href="/member/transactions" title='Transactions' active={activeMenu === "transactions"} />
					<MenuItem icon='messages' href="/member" title='messages' active={activeMenu === "messages"} />
					<MenuItem icon='rewards' href="/member" title='rewards' active={activeMenu === "rewards"} />
					<MenuItem icon='settings' href="/member/edit-profile" title='settings' active={activeMenu === "settings"} />
					<MenuItem icon='logout' href="/sign-in" title='logout' />
				</div>
				<Footer />
			</div>
		</section>
	)
}
