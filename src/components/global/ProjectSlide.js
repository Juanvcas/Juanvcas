import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import s from '@/styles/components/global/ProjectSlide.module.css';

export const ProjectSlide = (props) => {
	return (
		<div className={s.main}>
			<div className={s['image-cont']}>
				<figure className={s.main_image}>
					{/* <Image src={props.images[0]} alt={props.title} fill /> */}
				</figure>
			</div>
			<div className={s.main_desc}>
				<div className={s['desc-cont']}>
					<h3>
						{props.title} - <span>{props.category}</span>
					</h3>
					<p>{props.description}</p>
				</div>
				<FiArrowUpRight />
			</div>
		</div>
	);
};
