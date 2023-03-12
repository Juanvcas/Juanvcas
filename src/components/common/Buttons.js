import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import s from '@/styles/components/common/Buttons.module.css';

export const MainButton = (props) => {
	return (
		<button type={!!props.type} className={`${s.mainButton} ${props.style}`}>
			{props.text}
		</button>
	);
};

export const MainLinkButton = (props) => {
	return (
		<Link
			className={`${s.mainLinkButton} ${props.style}`}
			href={props.href}
			title={props.title}
			target={props.target || '_self'}
		>
			{props.text}
			<FiArrowRight />
		</Link>
	);
};

export const InputButton = (props) => {
	return (
		<input
			className={`${s.inputButton} ${props.style}`}
			type={props.type}
			// value={props.iValue}
		/>
	);
};
