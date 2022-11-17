import Image from 'next/image'
import React from 'react'
import cx from 'classnames'

interface menuItemProps {
	title: string;
	icon: "overview" | "transactions" | "messages" | "rewards" | "settings" | "logout";
	active?: boolean;
}
export default function MenuItem(props: Partial<menuItemProps>) {
	const { title, icon, active } = props;
	const classItem = cx({
		'item': true,
		'mb-30': true,
		'active': active,
	})
	return (
		<div className={classItem}>
			<Image src={`/icon/ic-menu-${icon}.svg`} className="icon me-3" width={25} height={25} alt="menu-icon" />
			<p className="item-title m-0">
				<a href="" className="text-lg text-decoration-none">{title}</a>
			</p>
		</div>
	)
}
