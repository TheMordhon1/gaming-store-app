import Image from 'next/image'
import React from 'react'
import cx from 'classnames'
import Link from 'next/link';

interface menuItemProps {
	title: string;
	icon: "overview" | "transactions" | "messages" | "rewards" | "settings" | "logout";
	active?: boolean;
	href: string;
}
export default function MenuItem(props: Partial<menuItemProps>) {
	const { title, icon, active, href = "/member" } = props;
	const classItem = cx({
		'item text-lg text-decoration-none mb-30': true,
		'active': active,
	})
	return (
		<Link href={href} className={classItem}>
			<Image src={`/icon/ic-menu-${icon}.svg`} className="icon me-3" width={25} height={25} alt="menu-icon" />
			<p className="item-title m-0">
				{title}
			</p>
		</Link>
	)
}
