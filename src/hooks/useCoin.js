import React, { Fragment, useState } from 'react';

const useCoin = (label, initialState, options) => {
	// State of our custom hook
	const [state, updateState] = useState(initialState);

	const Select = () => (
		<Fragment>
			<label>{label}</label>
			<select value={ state } onChange={ event => updateState(event.target.value) }>
				<option value="">Select...</option>
				{
					options.map(option => (
						<option key={ option.codigo } value={ option.codigo }>{ option.nombre }</option>
					))
				};
			</select>
		</Fragment>
	);
	return [state, Select, updateState];
};

export default useCoin;