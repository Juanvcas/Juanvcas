export const MessageModal = ({ s, message, icon, color }) => {
	return (
		<aside className={s.modal} style={{ backgroundColor: color }}>
			<div className={s['modal-message']}>
				<p>{message}</p>
			</div>
			{icon}
		</aside>
	);
};
