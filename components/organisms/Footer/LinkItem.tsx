import Link from 'next/link'


interface linkItemProps {
	title: string;
	href: string;
}
export default function LinkItem(props: linkItemProps) {
	const { title, href = "/" } = props;
	return (
		<li className="mb-6">
			<Link href={href} className="text-lg color-palette-1 text-decoration-none">{title}</Link>
		</li>
	)
}
