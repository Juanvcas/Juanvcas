import { useRef, useState } from 'react';
import { MainButton } from '../../common/Buttons';
import { SlClose, SlCheck } from 'react-icons/sl';
import { MessageModal } from '../../modals/MessageModal';

export const ContactForm = ({ s }) => {
	const [message, setMessage] = useState(false);
	const form = useRef();

	const handlerSubmit = async (e) => {
		e.preventDefault();

		const data = {
			name: form.current.name.value,
			email: form.current.email.value,
			message: form.current.message.value,
		};

		await fetch(`/api/contact`, {
			method: 'POST',
			headers: {
				ContentType: 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.status === 200) {
					setMessage({
						error: false,
						text: '¡El mensaje fue enviado exitosamente!',
					});
				} else {
					setMessage({
						error: true,
						text: 'Hubo un error al intentar enviar el mensaje.',
					});
				}
			})
			.catch((err) =>
				setMessage({
					error: true,
					text: 'Hubo un error al intentar enviar el mensaje.',
				})
			);
	};

	return (
		<>
			<form ref={form} className={s.form} onSubmit={handlerSubmit}>
				<label htmlFor='name'>
					<span>Nombre:</span>
					<input type={'text'} name={'name'} id={'name'} required />
				</label>
				<label htmlFor='email'>
					<span>Email:</span>
					<input type={'email'} name={'email'} id={'email'} required />
				</label>
				<label htmlFor='message'>
					<span>Mensaje:</span>
					<textarea name={'message'} id={'message'} required />
				</label>
				<MainButton type={'submit'} text={'Enviar'} />
			</form>
			{message && (
				<MessageModal
					s={s}
					message={message.text}
					icon={message.error ? <SlClose /> : <SlCheck />}
					color={message.error ? '#d61818' : '#10b336'}
				/>
			)}
		</>
	);
};
