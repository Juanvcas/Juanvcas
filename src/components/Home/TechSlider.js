import { DiJavascript1, DiReact, DiNodejsSmall } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import s from '@/styles/components/Home/TechSlider.module.css';

export const TechSlider = () => {
	return (
		<ul className={s.main}>
			<li>
				<DiJavascript1 /> | JavaScript
			</li>
			<li>
				<DiReact /> | React.js
			</li>
			<li>
				<TbBrandNextjs /> | Next.js
			</li>
			<li>
				<DiNodejsSmall /> | Node.js
			</li>
			<li>
				<SiExpress /> | Express.js
			</li>
		</ul>
	);
};
