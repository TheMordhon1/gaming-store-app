import React from 'react'
import cx from 'classnames'

interface tabButtonProps {
	active: boolean;
	title: "All Trx" | "Success" | "Pending" | "Failed";
}
export default function TabButton(props: tabButtonProps) {
	const { active, title } = props;
	const tabClass = cx({
		"btn btn-status rounded-pill text-sm me-3": true,
		"btn-active": active
	})

	return (
		<a href="#" className={tabClass} >{title}</a>
	)
}
