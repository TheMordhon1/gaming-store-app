export interface inputProps {
	id: string;
	label: string;
	type: "text" | "password" | "email" | "number";
}
export default function Input(props: inputProps) {
	const { id, label, type, ...nativeProps } = props
	return (
		<>
			<label htmlFor={id} className="form-label text-lg fw-medium color-palette-1 mb-10">
				{label}</label>
			<input type={type} className="form-control rounded-pill text-lg" id={id} name={id}
				aria-describedby={id} placeholder="Enter your name" {...nativeProps} />
		</>
	)
}
