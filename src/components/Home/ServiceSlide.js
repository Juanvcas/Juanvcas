export const ServiceSlide = (props) => {
	return (
		<article className={props.style}>
			<h3>{props.title}</h3>
			{props.image}
			<p>{props.text}</p>
		</article>
	);
};
