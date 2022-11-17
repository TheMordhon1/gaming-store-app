import React, { ReactNode } from 'react'

interface footerLinkProps {
	title: string;
	children: ReactNode;
}
export default function FooterLink(props: footerLinkProps) {
	const { title, children } = props;
	return (
		<div className="col-md-4 col-6 mb-lg-0 mb-25">
			<p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
			<ul className="list-unstyled">
				{children}
			</ul>
		</div>
	)
}
