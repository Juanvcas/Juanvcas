import s from '@/styles/components/global/Subtitle.module.css';

export const Subtitle = ({ style, text }) => (
	<div className={`${style} ${s.main}`}>
		<h2>{text}</h2>
		<span></span>
	</div>
);
