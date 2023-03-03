import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import s from '@/styles/components/common/Buttons.module.css';

export const MainButton = (props) => {
	return <button className={s.mainButton}>{props.text}</button>;
};

export const MainLinkButton = (props) => {
	return (
		<Link
			className={s.mainLinkButton}
			href={props.href}
			title={props.title}
			target={props.target || '_self'}
		>
			{props.text}
			<FiArrowRight />
		</Link>
	);
};
