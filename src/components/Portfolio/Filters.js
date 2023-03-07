import { InputButton } from '../common/Buttons';

export const Filters = ({ s }) => {
	return (
		<form className={s.filters_form}>
			<div className={s.form_select}>
				<label>
					<span>Tecnología</span>
					<select>
						<option value={''}>--Selecciona una opción--</option>
						<option value={'react'}>React.js</option>
						<option value={'next'}>Next.js</option>
						<option value={'node'}>Node.js</option>
					</select>
				</label>
				<label>
					<span>Tipo</span>
					<select>
						<option value={''}>--Selecciona una opción--</option>
						<option value={'commerce'}>E-commerce</option>
						<option value={'dashboard'}>Dashboard</option>
						<option value={'application'}>Aplicación web</option>
					</select>
				</label>
				<InputButton type={'input'} iValue={'Buscar'} />
			</div>
			<div className={s.form_search}>
				<label>
					<input type={'search'} />
				</label>
			</div>
		</form>
	);
};
