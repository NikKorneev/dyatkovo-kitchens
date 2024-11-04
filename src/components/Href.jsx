export const Href = ({ text, href }) => {
	return (
		<a
			href={href}
			className="font-montserrat text-customGreen text-[1rem] underline hover:underline p-2 font-normal"
		>
			{text}
		</a>
	);
};
